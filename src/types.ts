export interface PartnerItem {
  icon: string;
  url: string;
  title: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
  children: object[];
}

export interface FooterInfo {
  title: string;
  icon: string;
}

export interface Tool {
  title: string;
  link: string;
  imageComp: ImageMetadata;
  imageAlt: string;
  description: string;
  tags: string[];
}
