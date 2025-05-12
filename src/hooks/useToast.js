import toast from "react-hot-toast";

const useToast = () => {
  const showSuccess = (message) => {
    toast.success(message);
  };
  const showError = (message) => {
    toast.error(message);
  };
  return { showSuccess, showError };
};

export default useToast;
