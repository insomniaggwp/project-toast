import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState(() => []);

  const addToast = React.useCallback((message, variant) => {
  const nextToasts = [
    ...toasts,
    {
      id: crypto.randomUUID(),
      message,
      variant,
    },
  ];
  
    setToasts(nextToasts);
  }, [toasts]);

  const removeToast = React.useCallback((id) => {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    
    setToasts(nextToasts);
  }, [toasts]);

  const value = {
    toasts,
    addToast,
    removeToast
  };

  return (
    <ToastContext.Provider
      value={value}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;