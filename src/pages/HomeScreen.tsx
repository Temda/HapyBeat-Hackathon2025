import { Bell, Settings, Search } from 'lucide-react'
import LiveClassCard from '../components/home/LiveClassCard'
import SavedLessonCard from '../components/home/SavedLessonCard'
import InterpreterCard from '../components/community/InterpreterCard'

interface HomeScreenProps {
    setActiveTab: (tab: string) => void
    setShowTranscriptTab: (show: boolean) => void
}

const HomeScreen = ({ setActiveTab, setShowTranscriptTab }: HomeScreenProps) => {
    return (
        <div className="pb-16 lg:pb-0">
            {/* Header */}
            <header className="bg-primary-600 text-black p-4 lg:p-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold">HapyBeat</h1>
                            <p className="text-sm md:text-base opacity-90">Hello, Somchai!</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="p-1">
                                <Bell size={24} className="md:w-6 md:h-6" />
                            </button>
                            <button className="p-1">
                                <Settings size={24} className="md:w-6 md:h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="mt-4 md:mt-6 relative max-w-2xl mx-auto">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search lessons, words, or interpreters..."
                            className="w-full bg-gray-200 text-gray-800 rounded-full py-2 md:py-3 pl-10 pr-4 text-sm md:text-base"
                        />
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 lg:px-6">
                {/* Live Classes Section */}
                <section className="py-4 md:py-6">
                    <div className="flex justify-between items-center mb-3 md:mb-4">
                        <h2 className="text-lg md:text-xl font-semibold">Live Now</h2>
                        <button className="text-primary-600 text-sm md:text-base">See All</button>
                    </div>

                    <LiveClassCard
                        title="Biology: Cell Structure"
                        teacher="Prof. Siriwan"
                        department="Science Department"
                        setShowTranscriptTab={setShowTranscriptTab}
                    />
                </section>

                {/* Saved Lessons */}
                <section className="py-4 md:py-6">
                    <div className="flex justify-between items-center mb-3 md:mb-4">
                        <h2 className="text-lg md:text-xl font-semibold">Recent Saved Lessons</h2>
                        <button className="text-primary-600 text-sm md:text-base">See All</button>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        <SavedLessonCard
                            title="Mathematics: Algebra Basics"
                            teacher="Ajarn Preecha"
                            date="Yesterday"
                            duration="45 min"
                            // setShowTranscriptTab={setShowTranscriptTab}
                        />
                        <SavedLessonCard
                            title="Thai Literature: Classic Poems"
                            teacher="Ajarn Malee"
                            date="2 days ago"
                            duration="50 min"
                            // setShowTranscriptTab={setShowTranscriptTab}
                        />
                    </div>
                </section>

                {/* Interpreter Community */}
                <section className="py-4 md:py-6">
                    <div className="flex justify-between items-center mb-3 md:mb-4">
                        <h2 className="text-lg md:text-xl font-semibold">Connect with Interpreters</h2>
                        <button
                            onClick={() => setActiveTab('community')}
                            className="text-primary-600 text-sm md:text-base"
                        >
                            View All
                        </button>
                    </div>

                    <div className="flex overflow-x-auto pb-4 space-x-3 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:overflow-x-visible">
                        <InterpreterCard
                            image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            name="Jon Doe"
                            rating={4.9}
                            speciality="Science"
                            reviewCount={24}
                        />
                        <InterpreterCard
                            image='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            name="Sophia Jane"
                            rating={4.2}
                            speciality="Science"
                            reviewCount={24}
                        />
                        <InterpreterCard
                            image='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            name="Peter Parker"
                            rating={2.9}
                            speciality="Science"
                            reviewCount={24}
                        />
                        <InterpreterCard
                            image='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            name="Mary Jane"
                            rating={1.9}
                            speciality="Science"
                            reviewCount={24}
                        />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default HomeScreen