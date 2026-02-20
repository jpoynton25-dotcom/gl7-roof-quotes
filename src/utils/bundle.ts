/**
 * Bundle optimization utilities
 * Reduces bundle size through code splitting and lazy loading
 */

import { lazy } from 'react';

/**
 * Lazy load page components to reduce initial bundle size
 */
export const LazyPages = {
  // Service pages - lazy load
  RoofRepairsGL7: lazy(() => import('../pages/services/RoofRepairsGL7')),
  EmergencyRoofLeakGL7: lazy(() => import('../pages/services/EmergencyRoofLeakGL7')),
  RoofReplacementGL7: lazy(() => import('../pages/services/RoofReplacementGL7')),
  LeadFlashingRepairGL7: lazy(() => import('../pages/services/LeadFlashingRepairGL7')),
  ChimneyRepairsGL7: lazy(() => import('../pages/services/ChimneyRepairsGL7')),
  FlatRoofRepairGL7: lazy(() => import('../pages/services/FlatRoofRepairGL7')),
  StormDamageGL7: lazy(() => import('../pages/services/StormDamageGL7')),
  ServicesHub: lazy(() => import('../pages/services/ServicesHub')),
  
  // Village pages - lazy load
  LechladeRoofRepairs: lazy(() => import('../pages/LechladeRoofRepairs')),
  LechladeRoofLeaks: lazy(() => import('../pages/LechladeRoofLeaks')),
  LechladeChimneyRepairs: lazy(() => import('../pages/LechladeChimneyRepairs')),
  LechladeGuttering: lazy(() => import('../pages/LechladeGuttering')),
  LechladeFlatRoof: lazy(() => import('../pages/LechladeFlatRoof')),
  LechladeStormDamage: lazy(() => import('../pages/LechladeStormDamage')),
  LechladeRoofInspections: lazy(() => import('../pages/LechladeRoofInspections')),
  LechladeRoofTiling: lazy(() => import('../pages/LechladeRoofTiling')),
  
  FairfordRoofRepairs: lazy(() => import('../pages/FairfordRoofRepairs')),
  KempsfordRoofRepairs: lazy(() => import('../pages/KempsfordRoofRepairs')),
  SouthropRoofRepairs: lazy(() => import('../pages/SouthropRoofRepairs')),
  EastleachRoofRepairs: lazy(() => import('../pages/EastleachRoofRepairs')),
  DownAmpneyRoofRepairs: lazy(() => import('../pages/DownAmpneyRoofRepairs')),
  QueningtonRoofRepairs: lazy(() => import('../pages/QueningtonRoofRepairs')),
  HatheropRoofRepairs: lazy(() => import('../pages/HatheropRoofRepairs')),
  ColnStAldwynsRoofRepairs: lazy(() => import('../pages/ColnStAldwynsRoofRepairs')),
  MeyseyHamptonRoofRepairs: lazy(() => import('../pages/MeyseyHamptonRoofRepairs')),
  
  // Other pages - lazy load
  Areas: lazy(() => import('../pages/Areas')),
  FAQ: lazy(() => import('../pages/FAQ')),
  HowItWorks: lazy(() => import('../pages/HowItWorks')),
  Privacy: lazy(() => import('../pages/Privacy')),
  Terms: lazy(() => import('../pages/Terms')),
  Contact: lazy(() => import('../pages/Contact')),
  ThankYou: lazy(() => import('../pages/ThankYou')),
  RoofLeakHelp: lazy(() => import('../pages/RoofLeakHelp')),
  Request: lazy(() => import('../pages/Request')),
};

/**
 * Fallback component for lazy loading
 */
export const LoadingFallback = () => {
  return {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        color: '#666'
      },
      children: 'Loading...'
    }
  };
};
