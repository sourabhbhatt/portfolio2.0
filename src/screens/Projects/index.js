import React from "react";
import { motion } from "framer-motion";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import { mobileProjects, webProjects } from "../../assets/workData";
import Title from "../../components/Title";
import { revealTopStaggeredChildren } from "../../utils/animationVariations";

function Projects() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  const renderProjects = (projects, type = "mobile") =>
    projects.map((room, index) => (
      <motion.div
        key={room.slug}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: index * 0.1 }}
      >
        <Card room={room} index={index} type={type} />
      </motion.div>
    ));

  return (
    <motion.section
      variants={revealTopStaggeredChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="project"
    >
      {loading ? (
        <Loading />
      ) : (
        <section className="space-y-8 mt-12">
          {/* Centered Title with Lines for Mobile Projects */}
          <motion.div
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-[0.5px] w-16 bg-yellow-400" />
            <Title title="Mobile Projects" />
            <div className="h-[0.5px] w-16 bg-yellow-400" />
          </motion.div>

          {/* Horizontal Scrollable Panel for Mobile Projects */}
          <motion.div className="flex gap-6 overflow-x-auto px-6 py-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {renderProjects(mobileProjects, "mobile")}
          </motion.div>

          {/* Centered Title with Lines for Web Projects */}
          <motion.div
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-[0.5px] w-16 bg-yellow-400" />
            <Title title="Web Projects" />
            <div className="h-[0.5px] w-16 bg-yellow-400" />
          </motion.div>

          {/* Horizontal Scrollable Panel for Web Projects */}
          <motion.div className="flex gap-6 overflow-x-auto px-6 py-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {renderProjects(webProjects, "web")}
          </motion.div>
        </section>
      )}
    </motion.section>
  );
}

export default Projects;
