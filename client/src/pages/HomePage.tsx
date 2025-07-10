import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Church, Users, Calendar, MapPin, Phone, Mail } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Church className="w-12 h-12 text-primary mr-4" />
          <div>
            <h1 className="text-4xl font-bold text-primary">
              Mar Thoma Yuvajana Sakhyam
            </h1>
            <p className="text-xl text-muted-foreground">Kundara Centre</p>
          </div>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Welcome to the digital home of Mar Thoma Yuvajana Sakhyam Kundara Centre. 
          We are a vibrant youth community dedicated to faith, fellowship, and service.
        </p>
      </header>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* About Us */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              About Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Mar Thoma Yuvajana Sakhyam is the youth wing of the Mar Thoma Church, 
              bringing together young people in faith, service, and community building.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Stay tuned for our upcoming events, programs, and community gatherings. 
              Join us in our mission of faith and fellowship.
            </CardDescription>
            <Button className="mt-4" variant="outline">
              View Events
            </Button>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <span>contact@mtykundara.org</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Kundara, Kerala, India</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 border-t">
        <p className="text-muted-foreground">
          © 2025 Mar Thoma Yuvajana Sakhyam - Kundara Centre. All rights reserved.
        </p>
      </footer>
    </div>
  )
}