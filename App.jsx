import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Menu, 
  X, 
  Droplets, 
  Award, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Leaf,
  Shield,
  Star,
  ChevronDown,
  ChevronRight
} from 'lucide-react'
import './App.css'

// Importar imagens
import factoryImage from './assets/5PEN06KSspbM.jpg'
import productionImage from './assets/lXUfLHgDcWRz.jpg'
import galaoImage from './assets/xnnm6gJYrI8r.jpeg'
import bottleImage from './assets/Zu17DnhMBPT8.jpg'
import thermalSprayImage from './assets/QGuyQkiqUsXs.jpeg'
import thermalUseImage from './assets/JdKppaObDmit.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'empresa', label: 'A Empresa' },
    { id: 'produtos', label: 'Produtos' },
    { id: 'distribuidor', label: 'Seja Distribuidor' },
    { id: 'patrocinio', label: 'Patrocínio e Eventos' },
    { id: 'agua-thermal', label: 'Água Thermal' },
    { id: 'imprensa', label: 'Imprensa e Downloads' },
    { id: 'contatos', label: 'Contatos' }
  ]

  const produtos = [
    {
      nome: 'Copo 200ml',
      descricao: 'Ideal para consumo individual',
      imagem: galaoImage,
      categoria: 'Natural'
    },
    {
      nome: 'Garrafa PET 510ml',
      descricao: 'Perfeita para atividades esportivas',
      imagem: bottleImage,
      categoria: 'Natural/Gás'
    },
    {
      nome: 'Garrafa PET 1,5L',
      descricao: 'Para toda a família',
      imagem: bottleImage,
      categoria: 'Natural/Gás'
    },
    {
      nome: 'Galão 20L',
      descricao: 'Para empresas e residências',
      imagem: galaoImage,
      categoria: 'Natural'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-blue-900">INGÁ</h1>
                <p className="text-xs text-gray-600">Para quem quer qualidade</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">50 Anos de Tradição</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Água Mineral <span className="text-blue-600">Ingá</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Para quem quer qualidade. Há 50 anos levando pureza e qualidade para as famílias brasileiras.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('produtos')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Conheça Nossos Produtos
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('distribuidor')}
                >
                  Seja Distribuidor
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={factoryImage} 
                alt="Fábrica Água Mineral Ingá" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="h-8 w-8 text-yellow-500" />
                  <div>
                    <p className="font-semibold">Selo NSF</p>
                    <p className="text-sm text-gray-600">Qualidade Internacional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Empresa */}
      <section id="empresa" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">A Empresa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Hidrobrás Águas Minerais do Brasil Ltda. é uma empresa de mineração fundada em 1973, 
              com o objetivo de pesquisa, prospecção, engarrafamento e comercialização de águas minerais.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Nossa História</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fundada em 1973, completamos 50 anos de dedicação e cuidado para levar a melhor água até você. 
                  Nossa trajetória é marcada pela busca constante da excelência.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Qualidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Águas minerais oligominerais com baixa concentração de sódio, facilmente absorvidas pelo organismo. 
                  Certificação internacional NSF garante nossa excelência.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Leaf className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Sustentabilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Localizado em 46 hectares de área de proteção ambiental na Serra da Conquista, 
                  nosso parque garante a sustentabilidade do aquífero.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Processo Produtivo</h3>
              <p className="text-gray-600 mb-6">
                Em meio ao complexo natural denominado Parque de Águas, possuímos quatro fontes que são exploradas: 
                Fonte Ingá Sessilis I, II, III e IV. Ao longo de anos, as águas passam pelo processo hidrogeológico 
                de filtragem através das rochas, enriquecendo-se naturalmente com sais minerais.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Filtragem natural através das rochas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Enriquecimento com sais minerais por percolação</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Baixa concentração de sódio</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Capacidade superior a 1 milhão de litros/dia</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={productionImage} 
                alt="Processo de produção" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nossos Produtos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma linha completa de águas minerais nas marcas Ingá e Suiá, 
              em diversos tamanhos e formatos para atender todas as necessidades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {produtos.map((produto, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="text-lg">{produto.nome}</CardTitle>
                  <Badge variant="secondary">{produto.categoria}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{produto.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Características da Água Mineral Ingá</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Oligomineral</h4>
                <p className="text-gray-600 text-sm">Composição diversificada e bem equilibrada de sais minerais</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Baixo Sódio</h4>
                <p className="text-gray-600 text-sm">Favorece o sistema cardiovascular, própria para qualquer idade</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Fácil Absorção</h4>
                <p className="text-gray-600 text-sm">Auxilia na diálise renal e hidratação da pele</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seja Distribuidor */}
      <section id="distribuidor" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Seja Distribuidor</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Faça parte da nossa rede com mais de 200 distribuidores autorizados e exclusivos. 
              Junte-se à melhor água mineral do Brasil.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Vantagens de ser Distribuidor Ingá</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ChevronRight className="h-6 w-6 text-blue-300 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Marca Consolidada</h4>
                    <p className="text-blue-100">50 anos de tradição e qualidade reconhecida</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="h-6 w-6 text-blue-300 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Exclusividade Territorial</h4>
                    <p className="text-blue-100">Proteção da sua área de atuação</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="h-6 w-6 text-blue-300 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Suporte Técnico</h4>
                    <p className="text-blue-100">Acompanhamento e treinamento especializado</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="h-6 w-6 text-blue-300 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Linha Completa</h4>
                    <p className="text-blue-100">Diversos produtos para todos os segmentos</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle>Interesse em ser Distribuidor?</CardTitle>
                <CardDescription>Preencha o formulário e entraremos em contato</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Nome completo" />
                <Input placeholder="E-mail" type="email" />
                <Input placeholder="Telefone" />
                <Input placeholder="Cidade/Estado" />
                <Textarea placeholder="Conte-nos sobre seu interesse" />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Enviar Solicitação
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patrocínio e Eventos */}
      <section id="patrocinio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Patrocínio e Eventos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Há 50 anos apoiando eventos esportivos e culturais, promovendo saúde, bem-estar e 
              responsabilidade social em nossas comunidades.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Eventos Esportivos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Patrocinamos corridas, ciclismo e eventos aquáticos, promovendo a hidratação adequada 
                  para atletas e participantes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Eventos Culturais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Apoiamos festivais, shows e eventos comunitários, levando qualidade e refrescância 
                  para momentos especiais.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Leaf className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Responsabilidade Social</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Desenvolvemos projetos sociais e ambientais, contribuindo para o desenvolvimento 
                  sustentável das comunidades.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Solicite Patrocínio</h3>
            <p className="text-gray-600 mb-8">
              Tem um evento e gostaria do apoio da Água Mineral Ingá? Entre em contato conosco.
            </p>
            <Button size="lg" onClick={() => scrollToSection('contatos')}>
              Solicitar Patrocínio
            </Button>
          </div>
        </div>
      </section>

      {/* Água Thermal */}
      <section id="agua-thermal" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Novidade</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Água Thermal Ingá</h2>
              <p className="text-xl text-gray-600 mb-8">
                Frescor, limpeza, suavidade e beleza. Nossa água thermal possui propriedades calmantes, 
                anti-irritantes e antioxidantes para o cuidado da sua pele.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Benefícios</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Propriedades calmantes e anti-irritantes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Ação antioxidante para a pele</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Alívio pós-procedimentos dermatológicos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Hidratação e suavização da pele</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Modo de Usar</h3>
                  <p className="text-gray-600">
                    Pulverize a Água Thermal Ingá sobre a pele, deixe agir por alguns instantes 
                    e depois seque delicadamente.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={thermalSprayImage} 
                alt="Água Thermal Ingá Spray" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src={thermalUseImage} 
                alt="Uso da Água Thermal" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Imprensa e Downloads */}
      <section id="imprensa" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Imprensa e Downloads</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Materiais para imprensa, certificados de qualidade e recursos para download.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Certificados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Certificações de qualidade e análises laboratoriais</p>
                <Button variant="outline" size="sm">Download</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Logos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Logotipos em alta resolução para uso comercial</p>
                <Button variant="outline" size="sm">Download</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Releases</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Comunicados oficiais e notícias da empresa</p>
                <Button variant="outline" size="sm">Download</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Fotos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Banco de imagens da empresa e produtos</p>
                <Button variant="outline" size="sm">Download</Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Contato para Imprensa</h3>
            <p className="text-gray-600 text-center mb-6">
              Para mais informações, entrevistas ou materiais adicionais, entre em contato conosco.
            </p>
            <div className="text-center">
              <Button onClick={() => scrollToSection('contatos')}>
                Contato Imprensa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contatos */}
      <section id="contatos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contatos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entre em contato conosco. Estamos prontos para atendê-lo.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sede */}
            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Sede Administrativa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600">
                  Av. Pres. Juscelino Kubistcheck, 2775<br />
                  Vila Oeste, Belo Horizonte/MG<br />
                  CEP: 30.535-550
                </p>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>(31) 3371-4000</span>
                </div>
              </CardContent>
            </Card>

            {/* Indústria */}
            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Indústria</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600">
                  BR 381, Km 512<br />
                  Serra da Conquista<br />
                  Brumadinho/MG
                </p>
                <p className="text-sm text-gray-500">
                  Parque de Águas Minerais<br />
                  46 hectares de área protegida
                </p>
              </CardContent>
            </Card>

            {/* Contato Geral */}
            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Contato Geral</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>contato@aguamineralinga.com.br</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>(31) 3371-4000</span>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-gray-500 mb-2">Siga-nos nas redes sociais:</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Instagram</Button>
                    <Button variant="outline" size="sm">Facebook</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Contato */}
          <div className="mt-16">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Envie sua Mensagem</CardTitle>
                <CardDescription className="text-center">
                  Preencha o formulário abaixo e entraremos em contato
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Nome" />
                  <Input placeholder="E-mail" type="email" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Telefone" />
                  <Input placeholder="Assunto" />
                </div>
                <Textarea placeholder="Sua mensagem" rows={4} />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Droplets className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">INGÁ</h3>
                  <p className="text-sm text-gray-400">Para quem quer qualidade</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                50 anos de tradição levando pureza e qualidade para as famílias brasileiras.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Água Natural</li>
                <li>Água Gaseificada</li>
                <li>Água Thermal</li>
                <li>Linha Suiá</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Nossa História</li>
                <li>Qualidade</li>
                <li>Sustentabilidade</li>
                <li>Certificações</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>(31) 3371-4000</p>
                <p>contato@aguamineralinga.com.br</p>
                <p>Belo Horizonte/MG</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Hidrobrás Águas Minerais do Brasil Ltda. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
