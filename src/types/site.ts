import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProofPoint {
  value: string;
  label: string;
}

export interface PartnerCase {
  title: string;
  description: string;
  image: string;
}

export interface GalleryImage {
  title: string;
  category: string;
  src: string;
  alt: string;
}
