import { motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";

export const MotionWrapper = ({ children }) => {
    const wrapperRef = useRef(null);

    const wrapper = wrapperRef.current;

    // Create GSAP timeline
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(wrapper, { y: -100, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });

    // Play GSAP animation when component mounts
    tl.play();

    // Return cleanup function to pause animation when component unmounts

    return (
        <motion.div
            ref={wrapperRef}
            initial={{ opacity: 0, scale: 0.8 }} // Initial properties handled by GSAP
            exit={{ opacity: 0, scale: 0.8 }} // Exit properties handled by GSAP
        >
            {children}
        </motion.div>
    );
};
