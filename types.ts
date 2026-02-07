export enum AdType {
  COMMERCIAL = 'commercial',
  FESTIVAL = 'festival'
}

export enum AttireType {
  PROFESSIONAL = 'professional',
  TRADITIONAL = 'traditional'
}

export enum DurationPackage {
  SHORT = 16,
  MEDIUM = 32,
  LONG = 64
}

export interface AdFormData {
  adType: AdType;
  festivalName: string;
  attireType: AttireType;
  duration: DurationPackage;
  textInstructions: string;
}

export interface FileStore {
  logo: File | null;
  visitingCard: File | null;
  storeImage: File | null;
  productImages: File[];
  flyersPosters: File[];
  voiceRecording: File | null;
  textInstructionsFile: File | null;
}

export interface GeneratedOutputs {
  businessInfo: any;
  mainFramePrompt: string;
  headerPrompt: string;
  posterPrompt: string;
  voiceOverScript: string;
  veoPrompts: string[];
  hasProductImages: boolean;
  productImageCount: number;
  stockImagePrompts: string[] | null;
}

export interface GenerationStatus {
  step: string;
  isProcessing: boolean;
  error: string | null;
  progress: number;
}
