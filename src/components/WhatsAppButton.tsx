'use client';

import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919876543210'; // Replace with actual number
    const message = encodeURIComponent('Hi! I\'m interested in your climate-positive travel experiences. Can you help me plan my next adventure?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000
      }}
    >
      <Tooltip title="Chat with us on WhatsApp" placement="left">
        <Fab
          color="primary"
          onClick={handleWhatsAppClick}
          sx={{
            bgcolor: '#25D366',
            color: 'white',
            '&:hover': {
              bgcolor: '#128C7E',
              transform: 'scale(1.1)'
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            animation: 'pulse 2s infinite'
          }}
        >
          <WhatsAppIcon />
        </Fab>
      </Tooltip>
      
      <style jsx global>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 4px 25px rgba(37, 211, 102, 0.6);
          }
          100% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          }
        }
      `}</style>
    </motion.div>
  );
}