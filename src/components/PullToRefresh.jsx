import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PullToRefresh = ({ children }) => {
    const [startY, setStartY] = useState(null);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [threshold] = useState(100);

    useEffect(() => {
        const handleTouchStart = (e) => {
            setStartY(e.touches[0].clientY);
            setIsRefreshing(false);
        };

        const handleTouchMove = (e) => {
            if (startY === null) return;

            const deltaY = e.touches[0].clientY - startY;
            if (deltaY > threshold) {
                setIsRefreshing(true);
                window.location.reload(); // Refresh the page
            }
        };

        const handleTouchEnd = () => {
            setStartY(null);
        };

        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [startY, threshold]);

    return (
        <>
            <motion.div
                style={{ height: "100%", overflowY: "auto" }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isRefreshing ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <div style={{ textAlign: "center", paddingTop: "20px", color: "white" }}>
                    {isRefreshing ? "Refreshing..." : "Pull down to refresh"}
                </div>
            </motion.div>
            {children}
        </>
    );
};

export default PullToRefresh;
