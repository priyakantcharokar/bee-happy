'use client';

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
  Stack,
  Chip,
  InputAdornment,
  Alert,
  Fade
} from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ExploreIcon from '@mui/icons-material/Explore';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const experienceTypes = [
  'Farm Stays', 'Eco Destinations', 'Voluntourism', 
  'Corporate Retreats', 'Heritage Tours', 'Adventure Sports',
  'Wellness Retreats', 'Photography Tours'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: '',
    selectedExperiences: [] as string[]
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleExperienceToggle = (experience: string) => {
    setFormData(prev => ({
      ...prev,
      selectedExperiences: prev.selectedExperiences.includes(experience)
        ? prev.selectedExperiences.filter(exp => exp !== experience)
        : [...prev.selectedExperiences, experience]
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setAttachments(prev => [...prev, ...files]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData, attachments);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      message: '',
      selectedExperiences: []
    });
    setAttachments([]);
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Stack spacing={4} textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="h2" fontWeight={800} color="primary.main">
            Ready for Your Next Adventure?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Become part of our mindful explorer network! Tell us about your wanderlust aspirations, 
            and we&apos;ll design extraordinary earth-friendly adventures just for you.
          </Typography>
        </Stack>

        <Card 
          sx={{ 
            p: 4, 
            borderRadius: 4, 
            boxShadow: '0 8px 32px rgba(45, 125, 50, 0.1)',
            background: 'linear-gradient(135deg, rgba(45, 125, 50, 0.02) 0%, rgba(104, 159, 56, 0.02) 100%)'
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Name Field */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="primary" />
                      </InputAdornment>
                    )
                  }}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                />
              </Grid>

              {/* Email Field */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="primary" />
                      </InputAdornment>
                    )
                  }}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                />
              </Grid>

              {/* Phone Field */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon color="primary" />
                      </InputAdornment>
                    )
                  }}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                />
              </Grid>

              {/* Experience Type */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Preferred Experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  placeholder="e.g., Himalayan Trek, Organic Farm Stay..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ExploreIcon color="primary" />
                      </InputAdornment>
                    )
                  }}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                />
              </Grid>

              {/* Experience Chips */}
              <Grid item xs={12}>
                <Typography variant="subtitle1" color="text.primary" sx={{ mb: 2 }}>
                  What type of experiences interest you? (Select multiple)
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {experienceTypes.map((exp) => (
                    <Chip
                      key={exp}
                      label={exp}
                      onClick={() => handleExperienceToggle(exp)}
                      variant={formData.selectedExperiences.includes(exp) ? 'filled' : 'outlined'}
                      color={formData.selectedExperiences.includes(exp) ? 'primary' : 'default'}
                      sx={{
                        borderRadius: 3,
                        '&:hover': { 
                          bgcolor: formData.selectedExperiences.includes(exp) 
                            ? 'primary.dark' 
                            : 'primary.light',
                          color: 'white'
                        }
                      }}
                    />
                  ))}
                </Stack>
              </Grid>

              {/* Message Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tell us about your dream adventure"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Share your travel dreams, preferred dates, group size, or any special requirements..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                        <MessageIcon color="primary" />
                      </InputAdornment>
                    )
                  }}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                />
              </Grid>

              {/* File Upload */}
              <Grid item xs={12}>
                <Box>
                  <input
                    accept="image/*,.pdf,.doc,.docx"
                    style={{ display: 'none' }}
                    id="file-upload"
                    multiple
                    type="file"
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="file-upload">
                    <Button
                      variant="outlined"
                      component="span"
                      startIcon={<AttachFileIcon />}
                      sx={{ borderRadius: 2 }}
                    >
                      Attach Files (Optional)
                    </Button>
                  </label>
                  {attachments.length > 0 && (
                    <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
                      {attachments.map((file, index) => (
                        <Chip
                          key={index}
                          label={file.name}
                          size="small"
                          onDelete={() => setAttachments(prev => prev.filter((_, i) => i !== index))}
                          color="secondary"
                        />
                      ))}
                    </Stack>
                  )}
                </Box>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    fullWidth
                    sx={{
                      py: 2,
                      borderRadius: 3,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      background: 'linear-gradient(135deg, #2D7D32 0%, #689F38 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1B5E20 0%, #33691E 100%)',
                      }
                    }}
                  >
                    Start My Adventure Journey
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </form>
        </Card>

        {/* Success Message */}
        <Fade in={showSuccess}>
          <Alert 
            severity="success" 
            sx={{ 
              mt: 3, 
              borderRadius: 2,
              fontSize: '1rem'
            }}
          >
            🎉 Thank you for reaching out! We&apos;ll get back to you within 24 hours to start planning your amazing adventure.
          </Alert>
        </Fade>

        {/* Contact Info */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h6" color="primary.main" sx={{ mb: 2 }}>
            Prefer to reach us directly?
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="center">
            <Box>
              <Typography variant="body1" fontWeight={600}>📧 Email</Typography>
              <Typography variant="body2" color="text.secondary">beehappycare@gmail.com</Typography>
            </Box>
            <Box>
              <Typography variant="body1" fontWeight={600}>📞 Phone</Typography>
              <Typography variant="body2" color="text.secondary">+91 98765 43210</Typography>
            </Box>
            <Box>
              <Typography variant="body1" fontWeight={600}>🕒 Hours</Typography>
              <Typography variant="body2" color="text.secondary">09:00 AM - 05:00 PM</Typography>
            </Box>
          </Stack>
        </Box>
      </motion.div>
    </Container>
  );
}