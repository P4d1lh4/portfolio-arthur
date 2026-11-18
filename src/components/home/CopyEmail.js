import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheck, FiCopy } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import { contactInfo } from '../../data/ui';

const RESET_MS = 1800;

/** Copies the e-mail; falls back to opening the mail client when the Clipboard API is blocked. */
export default function CopyEmail({ className = 'pill pill--ghost' }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const id = setTimeout(() => setCopied(false), RESET_MS);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
    } catch (e) {
      window.location.href = `mailto:${contactInfo.email}`;
    }
  };

  return (
    <button className={className} onClick={copy} aria-live="polite">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={copied ? 'done' : 'idle'}
          className="copy-email-inner"
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(3px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.8, filter: 'blur(3px)' }}
          transition={{ duration: 0.2 }}
        >
          {copied ? <FiCheck /> : <FiCopy />}
          {copied ? t.ui.copied : t.ui.copyEmail}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
