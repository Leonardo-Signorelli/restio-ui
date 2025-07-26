export interface ToastProps {
  toast: ToastType;
  onRemove: (id: string) => void;
  isExiting?: boolean;
}
