"use client"

import type React from "react"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, XCircle } from "lucide-react"

const ProjectCarousel = dynamic(() => import("@/components/project-carousel").then((mod) => mod.ProjectCarousel))

const CTAButton = ({
  children,
  className = "",
  href = "#oferta",
  variant = "default",
}: {
  children: React.ReactNode
  className?: string
  href?: string
  variant?: "default" | "large"
}) => {
  const baseClasses =
    "bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg border-2 border-green-400 hover:border-green-500"
  const sizeClasses = variant === "large" ? "py-6 px-12 text-xl" : "py-4 px-8 text-lg"

  return (
    <Button asChild size="lg" className={`${baseClasses} ${sizeClasses} ${className}`}>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    </Button>
  )
}

const VagasCounter = () => {
  const [vagas, setVagas] = useState(26)

  useEffect(() => {
    const interval = setInterval(() => {
      setVagas((prev) => {
        if (prev > 17) {
          return prev - 1
        }
        return prev
      })
    }, 15000) // 15 seconds

    return () => clearInterval(interval)
  }, [])

  return <div className="text-4xl font-bold text-primary-foreground">{vagas}</div>
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="bg-primary text-primary-foreground py-3 px-4 text-center font-bold text-xs">
        AULA AO VIVO DIA: 29/09 às 19h30
      </div>

      <section className="relative py-8 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-bold mb-6 text-balance leading-tight text-white text-center md:text-4xl text-2xl">
            <span className="text-green-400"> Construir sua casa própria pode ser simples e muito mais barato</span>{" "}
            utilizando o financiamento da Caixa
          </h1>
          <p className="md:text-2xl mb-8 text-gray-100 text-pretty max-w-3xl mx-auto text-xs">
            Pela primeira vez online, assista agora e descubra na prática como construir sua casa própria pode ser mais
            barato que morar de aluguel e transforme seu sonho da casa própria em realidade. Mesmo que você ainda não
            tenha um LOTE comprado!
          </p>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="pt-0 pb-2 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/f-_6DJRbyDo?si=EToxgqqonj_WP86Y"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="text-center mt-4">
            <CTAButton>QUERO A MINHA CASA PRÓPRIA</CTAButton>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pt-16 pb-2 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="md:text-4xl font-bold mb-8 text-white text-center text-xl">
            Veja casas construídas com o financiamento da caixa:
          </h1>

          <ProjectCarousel />

          <p className="mt-6 text-lg font-semibold px-4 py-2 rounded-lg inline-block text-white bg-slate-800 border border-slate-600">
            ✨ Projetos reais financiados e construídos com sucesso
          </p>
        </div>
      </section>

      {/* Identificação Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Você passa por algum desses problemas?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Cansado de pagar aluguel sem nunca construir patrimônio?",
              "Medo do dono pedir o imóvel de volta a qualquer momento?",
              "Vontade de ter a casa do seu jeito, mas acha que é  MUITO caro e burocrático?",
              "Está cansado de dividir parede com vizinhos barulhentos, lidar com falta de privacidade e até discussões por pequenos incômodos?",
            ].map((item, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-destructive">
                <CardContent className="p-0 flex items-start gap-4">
                  <XCircle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                  <p className="text-lg text-card-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl md:text-2xl font-semibold mb-8 text-lime-700">
              👉 A verdade é que você só mora de aluguel, porque nunca te mostraram que construir sua casa própria pode
              ser mais barato que morar de aluguel
            </p>
            <CTAButton>QUERO MINHA CASA PRÓPRIA</CTAButton>
          </div>
        </div>
      </section>

      {/* Autoridade Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/engenheiro-guto-real.jpeg"
              alt="Guto - Engenheiro Empreendedor especialista em financiamento"
              width={192}
              height={192}
              className="w-48 h-48 rounded-full mx-auto mb-6 shadow-lg object-cover"
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Quem vai te ensinar</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Guto, o Engenheiro credenciado e especialista em financiamento pela Caixa, com mais de 7 anos de
              experiência ajudando famílias a realizarem o sonho da casa própria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { src: "/icon-1.svg", alt: "Ícone 1 - Especialização em financiamento" },
              { src: "/icon-2.svg", alt: "Ícone 2 - Experiência comprovada" },
              { src: "/icon-3.svg", alt: "Ícone 3 - Resultados garantidos" },
            ].map((image, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden shadow-lg h-48">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>

          <p className="text-xl font-semibold text-accent mb-8">
            "Nos últimos anos, ajudei dezenas de famílias a sairem do aluguel e realizarem o sonho da casa própria.
            Agora, chegou a sua vez."
          </p>

          <CTAButton>QUERO MINHA CASA PRÓPRIA</CTAButton>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            O que você vai aprender no evento online
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Como saber se você já pode financiar a construção da sua casa própria",
              "Quanto realmente precisa dar de entrada",
              "Como ser aprovado pela Caixa, com baixa taxa de financiamento",
              "Como pagar mais barato na construção da sua casa, do que você paga de aluguel hoje",
              "O passo a passo completo para transformar o seu sonho em realidade",
            ].map((item, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-primary">
                <CardContent className="p-0 flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-card-foreground font-medium">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <CTAButton>QUERO MINHA CASA PRÓPRIA</CTAButton>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Veja o que nossos alunos estão falando
          </h2>

          <div className="flex justify-center items-center mb-12">
            <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200 flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-sm text-gray-600 font-medium">Avaliações Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                name: "Iuri Maximiano",
                image: "/iuri-maximiano.jpeg",
                text: "Muito conhecimento e metas traçadas! Em apenas uma tarde ",
              },
              {
                name: "Paula Vieira",
                image: "/paula-vieira.png",
                text: "Engenheiro com senso de dono em todas as fases de um projeto, engajado, comprometido e inovador. Ele sonha junto com o cliente até a concretização!",
              },
              {
                name: "Merly Goulart",
                image: "/merly-goulart.jpeg",
                text: "Ótimo evento. Esclarecedor para montar o plano da obra.",
              },
              {
                name: "Hilton Costa",
                image: "/hilton-costa.png",
                text: "Excelente profissional!! Dedicado, focado e pronto para atender as mais diversas necessidades de seus clientes!",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i} className="text-lg">
                            {star}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <CTAButton>GARANTIR MINHA CASA PRÓPRIA</CTAButton>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 px-4 bg-[rgba(185,248,207,1)] text-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="md:text-4xl font-bold mb-6 text-2xl">100% seguro, você não corre nenhum risco</h2>
          <p className="mb-8 text-pretty text-base">
            Se em até 7 dias após a aula você sentir que o conteúdo não te ajudou, devolvemos 100% do seu dinheiro, sem
            perguntas e sem burocracia.
          </p>

          <div>
            <CTAButton>QUERO MINHA CASA PRÓPRIA</CTAButton>
          </div>
        </div>
      </section>

      {/* A Oferta */}
      <section id="oferta" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">SUPER OFERTA ESPECIAL HOJE!</h2>

          <div className="relative max-w-2xl mx-auto">
            {/* Badge de desconto */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm z-10 shadow-lg">
              90% OFF
            </div>

            {/* Card principal */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 rounded-2xl p-8 shadow-xl border-primary">
              {/* Banner da data */}
              <div className="bg-green-200 text-green-800 px-6 py-3 rounded-lg mb-6 font-semibold">
                Evento ONLINE e AO VIVO no dia: 29/09 às 19h30
              </div>

              {/* Título com ícone */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🎁 Ao garantir sua vaga hoje, você recebe:</h3>
              </div>

              {/* Lista de itens com valores */}
              <div className="space-y-4 mb-8 text-left">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">
                    Aula completa "O Segredo da Construção Financiada" ao vivo
                  </span>
                  <span className="font-bold text-gray-800">R$200</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Checklist Completo da Aprovação pela Caixa</span>
                  <span className="font-bold text-gray-800">R$97</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Mini-guia de Melhoria de Score</span>
                  <span className="font-bold text-gray-800">R$50</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Aula Bônus: Como Escolher e comprar o Lote Certo</span>
                  <span className="font-bold text-gray-800">R$150</span>
                </div>
              </div>

              {/* Preços */}
              <div className="text-center mb-6">
                <p className="text-xl text-gray-600 font-semibold mb-2">De: R$497,00</p>
                <p className="text-5xl font-bold text-green-600 mb-6">Por: R$47</p>
              </div>

              <CTAButton
                href="https://pay.hotmart.com/T101665306P?checkoutMode=10&bid=1756654894781"
                className="w-full"
              >
                GARANTIR OFERTA ESPECIAL
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Escassez e Urgência */}
      <section className="py-16 px-4 bg-white text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-destructive">
            🕒 ATENÇÃO, É UMA OPORTUNIDADE INÉDITA
          </h2>

          <div className="mb-8">
            <Image
              src="/globo-minha-casa-minha-vida.jpeg"
              alt="Reportagem da Globo sobre nova faixa do Minha Casa Minha Vida até R$ 12 mil por mês"
              width={800}
              height={450}
              className="rounded-lg shadow-lg mx-auto max-w-full h-auto"
            />
          </div>

          {/* Contexto Detalhado */}
          <div className="space-y-4 text-lg text-left md:text-center text-gray-700 mb-8">
            <p>
              <strong> Agora é oficial, o Jornal Nacional divulgou:</strong> Famílias com renda de até 12 mil reais, já
              podem <strong>financiar a construção da casa própria</strong>, pelo Minha Casa Minha Vida.
            </p>
            <p>
              👉<strong>Essa é uma oportunidade inédita</strong> e pode ser a sua chance de finalmente construir a casa
              dos seus sonhos, com o crédito da Caixa e a taxa do Minha Casa Minha Vida.
            </p>
            <p>
              💡 Mas deixa eu ser bem direto com você: <strong>Até quando essa possibilidade irá ficar aberta?</strong>{" "}
              Sinceramente, a gente sabe como nosso país funciona... Essas condições aparecem quando a eleição se
              aproxima, mas somem logo depois.
            </p>
          </div>

          {/* Conexão com a Solução (ESTILO MELHORADO) */}
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-8">
            <p className="text-lg text-green-900">
              <strong>
                {" "}
                Então, se você está esperando um sinal, esse é o momento. Porque quem aproveita a oportunidade, SEMPRE
                garante as melhores condições.
              </strong>
            </p>
          </div>

          {/* Mensagem vermelha */}
          <div className="mb-8">
            <p className="font-semibold text-red-600 text-lg">
              🚨 Mas vale um alerta, vejo centenas de pessoas deixando pra depois e se arrependendo, pois normalmente
              quem não aproveita a oportunidade, sempre acaba pagando mais caro ou perdendo a chance única.
            </p>
          </div>

          <CTAButton href="https://pay.hotmart.com/T101665306P?checkoutMode=10&bid=1756654894781">
            QUERO APROVEITAR A CHANCE
          </CTAButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Perguntas Frequentes</h2>

          <Accordion type="single" collapsible className="space-y-4 mb-12">
            {[
              {
                question: "E se minha renda não for aprovada?",
                answer:
                  "Na aula, você aprenderá exatamente como calcular se sua renda é suficiente e quais estratégias usar para aumentar suas chances de aprovação.",
              },
              {
                question: "Preciso ter todo o dinheiro guardado?",
                answer:
                  "Não! Vamos mostrar exatamente quanto você precisa de entrada e como se organizar financeiramente para conseguir o valor necessário.",
              },
              {
                question: "Não entendo nada de financiamento, vou conseguir acompanhar?",
                answer:
                  "Sim! O conteúdo é explicado de forma simples e didática, mesmo para quem nunca teve contato com financiamento imobiliário.",
              },
              {
                question: "Posso assistir do celular?",
                answer: "Claro! A aula pode ser assistida de qualquer dispositivo com acesso à internet.",
              },
              {
                question: "Preciso já ter um lote para conseguir financiar a construção da minha casa?",
                answer:
                  "Não! Ter o lote não é um pré-requisito. A Caixa tem uma modalidade de financiamento exclusiva para isso, você pode financiar a compra de lote mais a construção no mesmo contrato — com a mesma taxa, mesma análise e um só processo. Durante a aula, vamos te todos mostrar os caminhos possíveis. Assim, você já se prepara para dar o próximo passo com segurança",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border">
                <AccordionTrigger className="px-6 py-4 font-semibold text-card-foreground hover:no-underline text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center">
            <CTAButton>QUERO MINHA CASA PRÓPRIA</CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-br from-accent to-accent/90 text-accent-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
            Agora é a sua vez de sair do aluguel e conquistar a casa dos seus sonhos.
          </h2>

          <div className="mb-8">
            <Image
              src="/familia-engenheiro-plantas.jpeg"
              alt="Família trabalhando com engenheiro analisando plantas da casa"
              width={800}
              height={533}
              className="rounded-lg shadow-2xl mx-auto max-w-full h-auto"
            />
          </div>

          <CTAButton variant="large">QUERO MINHA CASA PRÓPRIA</CTAButton>

          <p className="mt-6 text-accent-foreground/80">✅ Garantia de 7 dias • ✅ Suporte completo</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-foreground text-background text-center">
        <p className="text-sm">© 2025 O Segredo da Construção Financiada. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
