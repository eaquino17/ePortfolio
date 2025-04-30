import Image from "next/image"
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Section with Particle Background */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div id="particles-js" className="absolute inset-0"></div>
        </div>

        <div className="z-10 space-y-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Eric Bernard Aquino
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300">Computer Science Student | Data Science & Analytics</h2>

          <div className="flex items-center justify-center gap-4 mt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>

          <div className="pt-12">
            <Button variant="outline" className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-800">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-purple-500">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2 text-gray-300">
              <p className="text-lg mb-4">
                Hello! I'm Eric, a passionate Computer Science student specializing in Data Science & Analytics. I'm
                dedicated to solving complex problems through code and data-driven insights.
              </p>
              <p className="text-lg mb-6">
                With a strong foundation in programming and analytical thinking, I strive to create innovative solutions
                that make a meaningful impact. I'm constantly learning and exploring new technologies to expand my skill
                set.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                <Badge className="bg-purple-600 hover:bg-blue-700">Data Science</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">Data Analysis</Badge>
                <Badge className="bg-cyan-600 hover:bg-purple-700">Python</Badge>
                <Badge className="bg-purple-600 hover:bg-cyan-700">Machine Learning</Badge>
                <Badge className="bg-blue-600 hover:bg-purple-700">SQL</Badge>
                <Badge className="bg-cyan-600 hover:bg-blue-700">JavaScript</Badge>
                <Badge className="bg-purple-600 hover:bg-cyan-700">React</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            My Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-purple-500 transition-all">
              <div className="h-48 relative">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 1" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-white">MoodTunes</CardTitle>
                <CardDescription className="text-gray-400">
                  Music recommendation system based on user mood analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>
                  MoodTunes is a mood-based music recommendation system built with React, Vite, Node.js, and Express,
                  using the Cyanite and Spotify APIs to suggest songs that match your mood, with JWT-authenticated access and smooth Framer Motion animations.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="grid gap-2">
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Vite</Badge>
                </div>
                <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Project 2 */}
            <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-purple-500 transition-all">
              <div className="h-48 relative">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 2" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-white">Hostpital Readmission Prediction</CardTitle>
                <CardDescription className="text-gray-400">
                  A comprehensive solution for predicting
                  30-day hospital readmissions using
                  machine learning
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>
                  Hospital Readmission Prediction is a web-based application built with Next.js and TypeScript that predicts 30-day hospital readmissions
                  using machine learning, featuring interactive data visualizations and modular chart components for deep clinical insight.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="grid gap-2">
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">Scikit-learn</Badge>
                </div>
                <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Project 3 */}
            <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-purple-500 transition-all">
              <div className="h-48 relative">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 3" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-white">Cusomer Churn Prediction Model</CardTitle>
                <CardDescription className="text-gray-400">A customer churn prediction model that analyzes bank customer data to identify those likely to leave.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>
                  A predictive analytics project built using Python and Jupyter Notebook to identify customers likely to churn based on bank customer data.
                  The model uses demographic, financial, and behavioral features to classify churn outcomes and provide actionable business insights.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="grid gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Jupyter Notebook</Badge>
                </div>
                <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Education & Certifications
          </h2>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-800">
              <TabsTrigger value="experience" className="data-[state=active]:bg-purple-600">
                Education
              </TabsTrigger>
              <TabsTrigger value="education" className="data-[state=active]:bg-cyan-600">
                Certification
              </TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="space-y-6">
              {/* Experience Item 1 */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">Bachelor of Science in Computer Science</CardTitle>
                      <CardDescription className="text-gray-400">Mapua University</CardDescription>
                    </div>
                    <Badge className="bg-purple-600">2022 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Consistent Dean's Lister</li>
                    <li>GPA: 1.72</li>
                    <li>Collaborated with cross-functional teams to implement data-driven solutions</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              {/* Education Item 1 */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">Google Data Analytics</CardTitle>
                      <CardDescription className="text-gray-400">Google</CardDescription>
                    </div>
                    <Badge className="bg-cyan-600">2025</Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Specialization in Data Science & Analytics</p>
                  <p className="mt-2">Relevant Coursework:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Machine Learning</li>
                    <li>Data Structures & Algorithms</li>
                    <li>Database Systems</li>
                    <li>Statistical Analysis</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Education Item 2 */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">Data Science Certification</CardTitle>
                      <CardDescription className="text-gray-400">Online Learning Platform</CardDescription>
                    </div>
                    <Badge className="bg-cyan-600">2022</Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>
                    Comprehensive certification covering data analysis, visualization, and machine learning techniques.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Get In Touch
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            I'm currently looking for new opportunities to apply my skills and knowledge. Whether you have a question or
            just want to say hi, I'll do my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
              <Mail className="mr-2 h-4 w-4" /> Email Me
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <p>© {new Date().getFullYear()} Eric Bernard Aquino. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}
