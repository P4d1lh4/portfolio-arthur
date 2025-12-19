import { useState, useEffect, useCallback } from 'react';

export const useTypingEffect = (texts, options = {}) => {
  const {
    typingSpeed = 50,
    deletingSpeed = 30,
    delayBetweenTexts = 2000,
    loop = true,
    startDelay = 0,
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const currentText = texts[currentIndex];
    let timeout;

    const startTyping = () => {
      if (isTyping) {
        if (displayText.length < currentText.length) {
          timeout = setTimeout(() => {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          }, typingSpeed);
        } else {
          timeout = setTimeout(() => {
            if (loop || currentIndex < texts.length - 1) {
              setIsTyping(false);
            } else {
              setIsComplete(true);
            }
          }, delayBetweenTexts);
        }
      } else {
        if (displayText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, deletingSpeed);
        } else {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setIsTyping(true);
        }
      }
    };

    if (startDelay > 0 && displayText.length === 0 && isTyping) {
      timeout = setTimeout(startTyping, startDelay);
    } else {
      startTyping();
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping, texts, typingSpeed, deletingSpeed, delayBetweenTexts, loop, startDelay]);

  const reset = useCallback(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsTyping(true);
    setIsComplete(false);
  }, []);

  return { displayText, isTyping, isComplete, currentIndex, reset };
};

export const useCommandTyping = (command, options = {}) => {
  const { speed = 80, startDelay = 500, onComplete } = options;
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!command) return;

    let timeout;
    let index = 0;

    const startTyping = () => {
      if (index < command.length) {
        timeout = setTimeout(() => {
          setDisplayText(command.slice(0, index + 1));
          index++;
          startTyping();
        }, speed + Math.random() * 50);
      } else {
        setIsComplete(true);
        onComplete?.();
      }
    };

    timeout = setTimeout(startTyping, startDelay);

    return () => clearTimeout(timeout);
  }, [command, speed, startDelay, onComplete]);

  return { displayText, isComplete };
};
