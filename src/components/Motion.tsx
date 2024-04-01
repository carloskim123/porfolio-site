import { motion, MotionProps } from "framer-motion";

export const MotionWrapper: React.FC<MotionWrapperProps & MotionProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 130, scale: 0.8 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
};
