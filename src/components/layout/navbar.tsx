'use client';

import { DropdownNavigation } from "@/components/ui/dropdown-navigation";
import * as Icons from "lucide-react";
import type { NavItem } from "@/types/nav";
import type { ElementType } from "react";


const fallbackIcon: ElementType = Icons.HelpCircle;

const dataNavItems = [
    {
        id: 1,
        label: "Products",
        subMenus: [
            {
                title: "DX Platform",
                items: [
                    { label: "Previews", description: "Helping teams ship 6× faster", icon: "Cpu" },
                    { label: "AI", description: "Powering breakthroughs", icon: "Search" },
                ],
            },
            {
                title: "Managed Infrastructure",
                items: [
                    { label: "Rendering", description: "Fast, scalable, and reliable", icon: "Globe" },
                    { label: "Observability", description: "Trace every step", icon: "Eye" },
                    { label: "Security", description: "Scale without compromising", icon: "Shield" },
                ],
            },
            {
                title: "Open Source",
                items: [
                    { label: "Next.js", description: "The native Next.js platform", icon: "Rocket" },
                    { label: "Turborepo", description: "Speed with Enterprise scale", icon: "Box" },
                    { label: "AI SDK", description: "The AI Toolkit for TypeScript", icon: "Palette" },
                ],
            },
        ],
    },
    {
        id: 2,
        label: "Solutions",
        subMenus: [
            {
                title: "Use Cases",
                items: [
                    { label: "AI Apps", description: "Deploy at the speed of AI", icon: "Cpu" },
                    { label: "Composable Commerce", description: "Power storefronts that convert", icon: "Box" },
                    { label: "Marketing Sites", description: "Launch campaigns fast", icon: "Rocket" },
                    { label: "Multi-tenant Platforms", description: "Scale apps with one codebase", icon: "Globe" },
                    { label: "Web Apps", description: "Ship features, not infrastructure", icon: "Search" },
                ],
            },
            {
                title: "Users",
                items: [
                    { label: "Platform Engineers", description: "Automate away repetition", icon: "Cpu" },
                    { label: "Design Engineers", description: "Deploy for every idea", icon: "Palette" },
                ],
            },
        ],
    },
    {
        id: 3,
        label: "Resources",
        subMenus: [
            {
                title: "Tools",
                items: [
                    { label: "Resource Center", link: "/center", description: "Today's best practices", icon: "BookOpen" },
                    { label: "Marketplace", link: "/market", description: "Extend and automate workflows", icon: "Search" },
                    { label: "Templates", link: "/", description: "Jumpstart app development", icon: "FileText" },
                    { label: "Guides", link: "/", description: "Find help quickly", icon: "BookOpen" },
                    { label: "Partner Finder", link: "/", description: "Get help from solution partners", icon: "Search" },
                ],
            },
            {
                title: "Company",
                items: [
                    { label: "Customers", link: "/customers", description: "Trusted by the best teams", icon: "Newspaper" },
                    { label: "Blog", link: "/blog", description: "The latest posts and changes", icon: "FileText" },
                    { label: "Changelog", link: "/changelog", description: "See what shipped", icon: "BookOpen" },
                    { label: "Press", link: "/press", description: "Read the latest news", icon: "Newspaper" },
                ],
            },
        ],
    },
    { id: 4, label: "Enterprise", link: "/enterprise" },
    { id: 5, label: "Docs", link: "/docs" },
    { id: 6, label: "Pricing", link: "/pricing" },
];


function Navbar() {
    const navItems: NavItem[] = dataNavItems.map((item) => ({
      ...item,
      subMenus: item.subMenus?.map((sub) => ({
        ...sub,
        items: sub.items.map((i) => {
          const IconComponent = ((Icons as unknown) as Record<string, ElementType>)[i.icon] ?? fallbackIcon;
          return {
            ...i,
            icon: IconComponent,
          };
        }),
      })),
    }));
  
    return <DropdownNavigation navItems={navItems} />;
  }
  

export { Navbar };
