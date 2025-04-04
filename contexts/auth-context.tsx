"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define the auth context type
interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

// Define a simple user type
interface User {
  id: string
  name: string
  email: string
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Create a provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  // Check for existing session on initial load
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth")
    if (storedAuth) {
      try {
        const authData = JSON.parse(storedAuth)
        setIsAuthenticated(true)
        setUser(authData.user)
      } catch (error) {
        console.error("Failed to parse auth data from localStorage:", error)
      }
    }
    setIsInitialized(true)
  }, [])

  // Save auth state to localStorage when it changes
  useEffect(() => {
    if (isInitialized) {
      if (isAuthenticated && user) {
        localStorage.setItem("auth", JSON.stringify({ user }))
      } else {
        localStorage.removeItem("auth")
      }
    }
  }, [isAuthenticated, user, isInitialized])

  // Mock login function
  const login = async (email: string, password: string) => {
    // In a real app, this would make an API call to authenticate
    // For now, we'll just simulate a successful login after validating the password

    // Simple password validation (in a real app, this would be done server-side)
    if (!password || password.length < 6) {
      throw new Error("Invalid password")
    }

    const mockUser = {
      id: "user_123",
      name: "John Doe",
      email: email,
    }

    setUser(mockUser)
    setIsAuthenticated(true)
  }

  // Mock signup function
  const signup = async (name: string, email: string, password: string) => {
    // In a real app, this would make an API call to create an account
    // For now, we'll just simulate a successful signup after validating the password

    // Simple password validation (in a real app, this would be done server-side)
    if (!password || password.length < 6) {
      throw new Error("Password must be at least 6 characters")
    }

    const mockUser = {
      id: "user_" + Math.random().toString(36).substring(2, 9),
      name: name,
      email: email,
    }

    setUser(mockUser)
    setIsAuthenticated(true)
  }

  // Logout function
  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Create a custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

