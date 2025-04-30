"use client"

import type React from "react"

import Image from "next/image"
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRef, useEffect, useState } from "react"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const certificationsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"}`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="font-bold text-xl bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Eric Aquino
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection(certificationsRef)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
          <div className="flex space-x-3">
            <a
              href="https://github.com/eaquino17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/eric-bernard-aquino/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Particle Background */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div id="particles-js" className="absolute inset-0"></div>
        </div>

        <div className="z-10 space-y-8 max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text animate-gradient">
            Eric Bernard Aquino
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300">Computer Science Student | Data Science & Analytics</h2>

          <div className="flex items-center justify-center gap-5 mt-8">
            <a
              href="https://github.com/eaquino17"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 hover:scale-110 transition-all duration-300"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/eric-bernard-aquino/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:aquino.ericbernard17@gmail.com"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 hover:scale-110 transition-all duration-300"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>

          <div className="pt-8">
            <a href="/EricAquino_Resume.pdf" download="EricAquino_Resume.pdf">
              <Button
                variant="outline"
                className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-purple-500 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection(aboutRef)}
          className="absolute bottom-8 animate-bounce hover:text-purple-400 transition-colors"
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </button>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 transform transition-all duration-500 hover:scale-105">
              <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/20">
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
              <p className="text-lg mb-4 leading-relaxed">
                Hello! I'm Eric, a passionate Computer Science student specializing in Data Science & Analytics. I'm
                dedicated to solving complex problems through code and data-driven insights.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                With a strong foundation in programming and analytical thinking, I strive to create innovative solutions
                that make a meaningful impact. I'm constantly learning and exploring new technologies to expand my skill
                set.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 transition-colors py-1 px-3">
                  Python
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-colors py-1 px-3">
                  Data Science
                </Badge>
                <Badge className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 transition-colors py-1 px-3">
                  Machine Learning
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 transition-colors py-1 px-3">
                  SQL
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-colors py-1 px-3">
                  JavaScript
                </Badge>
                <Badge className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 transition-colors py-1 px-3">
                  React
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 transition-colors py-1 px-3">
                  Next.js
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-24 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            My Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group">
              <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-300 h-full transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Project 1"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                    Data Visualization Dashboard
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Interactive dashboard for visualizing complex datasets
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>
                    Built with Python, Plotly, and Dash to create an interactive data visualization tool that helps
                    users explore and understand complex datasets.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-cyan-500 text-cyan-400">
                      Plotly
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-cyan-400 hover:text-cyan-300 group-hover:bg-gray-700/50"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Project 2 */}
            <div className="group">
              <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-300 h-full transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Project 2"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                    Machine Learning Model
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Predictive model for customer behavior analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>
                    Developed a machine learning model that predicts customer behavior patterns using historical data,
                    helping businesses optimize their marketing strategies.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      TensorFlow
                    </Badge>
                    <Badge variant="outline" className="border-cyan-500 text-cyan-400">
                      Scikit-learn
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-cyan-400 hover:text-cyan-300 group-hover:bg-gray-700/50"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Project 3 */}
            <div className="group">
              <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-300 h-full transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Project 3"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                    Web Application
                  </CardTitle>
                  <CardDescription className="text-gray-400">Full-stack web app for data management</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>
                    Created a full-stack web application that allows users to manage and analyze their data with
                    intuitive interfaces and powerful backend processing.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-cyan-500 text-cyan-400">
                      Node.js
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-cyan-400 hover:text-cyan-300 group-hover:bg-gray-700/50"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/eaquino17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            >
              View more projects on GitHub <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Certifications & Education Section */}
      <section ref={certificationsRef} className="py-24 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Education & Certifications
          </h2>

          <Tabs defaultValue="certifications" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12 bg-gray-800 p-1 rounded-lg">
              <TabsTrigger
                value="certifications"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-700 data-[state=active]:text-white rounded-md transition-all duration-300"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-600 data-[state=active]:to-cyan-700 data-[state=active]:text-white rounded-md transition-all duration-300"
              >
                Certifications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="certifications" className="space-y-8 mt-4">
              {/* Certification Item 1 */}
              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">Bachelor of Science in Computer Science</CardTitle>
                      <CardDescription className="text-gray-400">Mapua University</CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-600 to-purple-700">2022 - 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Consistent Dean's Lister</li>
                    <li>GPA: 1.72</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="space-y-8 mt-4">
              {/* Education Item 1 */}
              <Card className="bg-gray-800 border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">Google Data Analytics</CardTitle>
                      <CardDescription className="text-gray-400">Google</CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-cyan-600 to-cyan-700">2025</Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Specialization in Data Science</p>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Consistent Dean's Lister</li>
                    <li>GPA: 1.72</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Education Item 2 */}
              <Card className="bg-gray-800 border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">Data Science Certification</CardTitle>
                      <CardDescription className="text-gray-400">Online Learning Platform</CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-cyan-600 to-cyan-700">2022</Badge>
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
      <section ref={contactRef} className="py-24 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Get In Touch
          </h2>

          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities to apply my skills and knowledge. Whether you have a question or
            just want to say hi, I'll do my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:aquino.ericbernard17@gmail.com">
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 px-6 py-6 h-auto text-base">
                <Mail className="mr-2 h-5 w-5" /> Email Me
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/eric-bernard-aquino/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 px-6 py-6 h-auto text-base"
              >
                <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-gray-800 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/eaquino17"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/eric-bernard-aquino/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:aquino.ericbernard17@gmail.com"
              className="hover:text-white transition-colors transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
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
