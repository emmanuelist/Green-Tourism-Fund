import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'

type Props = {}

function FeaturedProjects({ }: Props)
{
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.h2
                className="text-3xl font-bold text-gray-900 mb-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((project, index) => (
                    <motion.div
                        key={project}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group"
                    >
                        <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="aspect-video bg-green-100 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <img
                                    src={`/api/placeholder/400/300`}
                                    alt="Project thumbnail"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Wildlife Sanctuary Project {project}</h3>
                                <p className="text-gray-600 mb-4">Supporting local conservation efforts and sustainable tourism practices.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-green-600 font-medium">$50,000 Goal</span>
                                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-600 w-3/4 rounded-full" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedProjects