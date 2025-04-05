"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define a simple user type
interface User {
  id: string
  name: string
  email: string
  profileImage?: string
  address?: string
}

// Define additional data type for signup
interface SignUpData {
  firstName: string
  lastName: string
  [key: string]: string // Allow for additional string properties
}

// Define the auth context type
interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, additionalData: SignUpData) => Promise<void>
  logout: () => void
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Create a provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check for authentication status on initial load (e.g., from localStorage)
    const storedAuth = localStorage.getItem("auth")
    if (storedAuth) {
      try {
        const authData = JSON.parse(storedAuth)
        setIsAuthenticated(authData.isAuthenticated)
        setUser(authData.user)
      } catch (error) {
        console.error("Failed to parse auth from localStorage:", error)
      }
    }
  }, [])

  // Update localStorage when auth state changes
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify({ isAuthenticated, user }))
  }, [isAuthenticated, user])

  // Sign in function
  const signIn = async (email: string, password: string) => {
    // Simulate API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@example.com" && password === "password") {
          setIsAuthenticated(true)
          setUser({
            id: "1",
            name: "Test User",
            email: "test@example.com",
            address: "",
          })
          resolve()
        } else {
          reject(new Error("Invalid credentials"))
        }
      }, 500)
    })
  }

  // Sign up function
  const signUp = async (email: string, password: string, additionalData: SignUpData) => {
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsAuthenticated(true)
        setUser({
          id: "2",
          name: additionalData.firstName + " " + additionalData.lastName,
          email: email,
          address: "",
        })
        resolve()
      }, 500)
    })
  }

  // Sign out function
  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, signUp, logout }}>{children}</AuthContext.Provider>
  )
}

// Create a custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    return {
      isAuthenticated: false,
      user: null,
      signIn: async () => {},
      signUp: async () => {},
      logout: () => {},
    }
  }
  return context
}

