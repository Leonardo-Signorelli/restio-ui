export interface ToastGroupProps {
  toasts: ToastType[];
  onRemoveToast: (id: string) => void;
  maxVisible?: number;
}
