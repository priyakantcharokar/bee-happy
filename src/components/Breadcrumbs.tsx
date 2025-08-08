'use client';

import { Breadcrumbs as MuiBreadcrumbs, Link, Typography, Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BreadcrumbsProps {
  customPath?: { label: string; href?: string }[];
}

export default function Breadcrumbs({ customPath }: BreadcrumbsProps) {
  const pathname = usePathname();
  
  const generateBreadcrumbs = () => {
    if (customPath) return customPath;
    
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ label: 'Home', href: '/' }];
    
    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;
      
      // Format segment name
      const label = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      
      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();
  
  if (breadcrumbs.length <= 1) return null;

  return (
    <Box sx={{ 
      py: 2, 
      px: { xs: 2, md: 0 },
      display: { xs: 'block', md: 'none' } // Only show on mobile
    }}>
      <MuiBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          '& .MuiBreadcrumbs-separator': {
            color: 'primary.main'
          }
        }}
      >
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const isHome = crumb.label === 'Home';
          
          if (isLast) {
            return (
              <Typography 
                key={index} 
                color="text.primary" 
                fontWeight={600}
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
              >
                {isHome && <HomeIcon fontSize="small" />}
                {crumb.label}
              </Typography>
            );
          }
          
          return (
            <Link
              key={index}
              underline="hover"
              color="inherit"
              href={crumb.href}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 0.5,
                '&:hover': { color: 'primary.main' }
              }}
            >
              {isHome && <HomeIcon fontSize="small" />}
              {crumb.label}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
}