"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Activity } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
      title: "Patient Risk Assessment",
      href: "/docs/predictive-models/patient-risk-assessment",
      description:
        "Predictive models for assessing patient risk based on medical history and current health status.",
    },
    {
      title: "Treatment Recommendation",
      href: "/docs/predictive-models/treatment-recommendation",
      description:
        "AI-powered recommendations for treatment plans tailored to individual patient needs.",
    },
    {
      title: "Disease Prediction",
      href: "/docs/predictive-models/disease-prediction",
      description:
        "Predictive analytics to identify potential diseases and health conditions based on symptoms and medical data.",
    },
    {
      title: "Health Monitoring",
      href: "/docs/predictive-models/health-monitoring",
      description:
        "Real-time monitoring of patient health metrics and early detection of abnormalities.",
    },
    {
      title: "Drug Interaction Analysis",
      href: "/docs/predictive-models/drug-interaction-analysis",
      description:
        "Analysis of potential interactions between medications to prevent adverse effects.",
    },
  ];
  

  export function NavigationMenuDemo() {
    return (
      <NavigationMenu >
        <NavigationMenuList className="flex-col md:flex-row sm:flex-row">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="https://manthan-alpha.vercel.app"
                    >
                      <Activity className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                       @manthanindane
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        CEO and Co-founder.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="What is Healthpass?">
                  Introducing Healthpass.
                </ListItem>
                <ListItem href="/docs/installation" title="Technology">
                  Technology behind building a robust system covering various healthcare services.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Papers">
                  New Research Papers
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>What we offer</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/aboutus" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
               About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
  const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavigationMenuDemo