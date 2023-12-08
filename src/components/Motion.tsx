import { motion, MotionProps } from "framer-motion";

export const MotionWrapper: React.FC<MotionWrapperProps & MotionProps> = ({ children }) => {
    return ( 
        <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 130 }}
            
        >
            {children}
        </motion.div>
    );
};
