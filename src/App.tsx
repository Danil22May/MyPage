import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ExternalLink } from 'lucide-react'

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

const App: React.FC = () => {
  const projects: Project[] = [
    { id: 1, title: "E-commerce Website", description: "A full-stack e-commerce platform built with React and Spring", link: "https://github.com/Danil22May/P3-Digital-Academy-Project-ComicsShop-Frontend" },
    { id: 2, title: "Rest API", description: "A Rest Api using Spring and Docker with MySQL", link: "https://example.com/weather-app" },
    { id: 3, title: "Task Manager", description: "A task management application built with React and Firebase", link: "https://example.com/task-manager" },
  ]

  const skills: string[] = ["JavaScript", "React", "Node.js", "Express", "MongoDB", "SQL", "Java", "Vue", "PHP", "Laravel", "SQL", "Docker"]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Daniel Tararak</h1>
          <p className="text-xl">Desarrollador Web Full Stack</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-700">Sobre mí</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
              Soy un programador apasionado que disfruta cada parte del proceso de programación. Me encanta aprender nuevas tecnologías y siempre encuentro emoción en los desafíos. Además, tengo la capacidad de adaptarme rápidamente a nuevos conceptos, lo que me permite mejorar mis habilidades de manera continua y eficiente.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <Card key={skill}>
                <CardContent className="p-4 text-emerald-600 hover:shadow-md transition-shadow">
                  <p className="text-center">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-emerald-600">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Ver proyecto <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contacto</CardTitle>
              <CardDescription>Envíame un mensaje y me pondré en contacto contigo pronto.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
                  <Input id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
                  <Textarea id="message" name="message" rows={4} required />
                </div>
                <Button type="submit">Enviar mensaje</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; Daniel Tararak</p>
        </div>
      </footer>
    </div>
  )
}

export default App