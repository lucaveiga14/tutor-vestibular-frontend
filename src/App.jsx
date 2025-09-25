import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { BookOpen, Sparkles, Film, Users, Lightbulb, Brain } from 'lucide-react'
import './App.css'

function App() {
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('')
  const [selectedStyle, setSelectedStyle] = useState('')
  const [generatedContent, setGeneratedContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const subjects = {
    'matematica': {
      name: 'Matemática',
      icon: '📐',
      topics: [
        'Números e Operações',
        'Geometria Plana',
        'Geometria Espacial',
        'Álgebra',
        'Funções',
        'Estatística e Probabilidade'
      ]
    },
    'fisica': {
      name: 'Física',
      icon: '⚛️',
      topics: [
        'Mecânica',
        'Termodinâmica',
        'Eletromagnetismo',
        'Ondulatória',
        'Óptica',
        'Física Moderna'
      ]
    },
    'quimica': {
      name: 'Química',
      icon: '🧪',
      topics: [
        'Química Geral',
        'Química Orgânica',
        'Físico-Química',
        'Química Inorgânica',
        'Bioquímica',
        'Química Ambiental'
      ]
    },
    'biologia': {
      name: 'Biologia',
      icon: '🧬',
      topics: [
        'Citologia',
        'Genética',
        'Evolução',
        'Ecologia',
        'Anatomia Humana',
        'Botânica'
      ]
    },
    'historia': {
      name: 'História',
      icon: '📚',
      topics: [
        'História do Brasil',
        'História Geral',
        'Idade Média',
        'Idade Moderna',
        'Idade Contemporânea',
        'História da América'
      ]
    },
    'geografia': {
      name: 'Geografia',
      icon: '🌍',
      topics: [
        'Geografia Física',
        'Geografia Humana',
        'Geopolítica',
        'Cartografia',
        'Geografia do Brasil',
        'Meio Ambiente'
      ]
    },
    'portugues': {
      name: 'Português',
      icon: '📝',
      topics: [
        'Gramática',
        'Literatura Brasileira',
        'Literatura Portuguesa',
        'Redação',
        'Interpretação de Texto',
        'Figuras de Linguagem'
      ]
    },
    'filosofia': {
      name: 'Filosofia',
      icon: '🤔',
      topics: [
        'Filosofia Antiga',
        'Filosofia Medieval',
        'Filosofia Moderna',
        'Filosofia Contemporânea',
        'Ética',
        'Filosofia Política'
      ]
    }
  }

  const explanationStyles = [
    {
      id: 'tradicional',
      name: 'Tradicional',
      description: 'Explicação direta e objetiva, como nos livros didáticos',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'historia',
      name: 'Contação de Histórias',
      description: 'Aprenda através de narrativas envolventes',
      icon: Sparkles,
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: 'cultura-pop',
      name: 'Cultura Pop',
      description: 'Metáforas com filmes, séries e jogos',
      icon: Film,
      color: 'bg-pink-100 text-pink-800'
    },
    {
      id: 'personagens',
      name: 'Personagens',
      description: 'Explicações com diferentes personas especializadas',
      icon: Users,
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 'analogias',
      name: 'Analogias Criativas',
      description: 'Comparações do dia a dia para facilitar o entendimento',
      icon: Lightbulb,
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 'visual',
      name: 'Pensamento Visual',
      description: 'Explicações com foco em diagramas e mapas mentais',
      icon: Brain,
      color: 'bg-indigo-100 text-indigo-800'
    }
  ]

  const generateContent = async () => {
  if (!selectedSubject || !selectedTopic || !selectedStyle) {
    alert('Por favor, selecione uma matéria, tópico e estilo de explicação.')
    return
  }

  setIsGenerating(true)

  try {
    const response = await fetch("https://tutor-vestibular-backend.onrender.com/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: selectedSubject,
        topic: selectedTopic,
        style: selectedStyle
      })
    })
    const data = await response.json()
    setGeneratedContent(data.content)
  } catch (error) {
    console.error("Erro ao gerar explicação:", error)
    setGeneratedContent("⚠️ Erro ao gerar explicação.")
  }

  setIsGenerating(false)
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🎓 Tutor Vestibular
          </h1>
          <p className="text-lg text-gray-600">
            Aprenda com estilo! Escolha sua matéria e descubra diferentes formas de aprender.
          </p>
        </div>

        {/* Selection Panel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Configure sua Experiência de Aprendizado
            </CardTitle>
            <CardDescription>
              Selecione a matéria, tópico e estilo de explicação que mais combina com você.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Subject Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Matéria</label>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha uma matéria" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(subjects).map(([key, subject]) => (
                    <SelectItem key={key} value={key}>
                      {subject.icon} {subject.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Topic Selection */}
            {selectedSubject && (
              <div>
                <label className="block text-sm font-medium mb-2">Tópico</label>
                <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                  <SelectTrigger>
                    <SelectValue placeholder="Escolha um tópico" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects[selectedSubject].topics.map((topic) => (
                      <SelectItem key={topic} value={topic}>
                        {topic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Style Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Estilo de Explicação</label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {explanationStyles.map((style) => {
                  const IconComponent = style.icon
                  return (
                    <Card 
                      key={style.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedStyle === style.id ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setSelectedStyle(style.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <IconComponent className="h-5 w-5 mt-1 text-gray-600" />
                          <div className="flex-1">
                            <h3 className="font-medium text-sm">{style.name}</h3>
                            <p className="text-xs text-gray-500 mt-1">{style.description}</p>
                            <Badge className={`mt-2 text-xs ${style.color}`}>
                              {style.name}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Generate Button */}
            <Button 
              onClick={generateContent}
              disabled={!selectedSubject || !selectedTopic || !selectedStyle || isGenerating}
              className="w-full"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Gerando conteúdo...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Gerar Explicação
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Generated Content */}
        {generatedContent && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Sua Explicação Personalizada
              </CardTitle>
              <div className="flex gap-2">
                <Badge variant="secondary">
                  {subjects[selectedSubject]?.icon} {subjects[selectedSubject]?.name}
                </Badge>
                <Badge variant="secondary">
                  {selectedTopic}
                </Badge>
                <Badge className={explanationStyles.find(s => s.id === selectedStyle)?.color}>
                  {explanationStyles.find(s => s.id === selectedStyle)?.name}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                  {generatedContent}
                </pre>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default App
