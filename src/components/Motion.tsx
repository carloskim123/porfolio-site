import { motion, MotionProps } from "framer-motion";

export const MotionWrapper: React.FC<MotionWrapperProps & MotionProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{
                duration: 0.6,
                ease: [0.42, 0, 0.58, 1], 
            }}
        >
            {children}
        </motion.div>
    );
};
