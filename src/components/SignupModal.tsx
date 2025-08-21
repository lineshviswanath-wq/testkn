import React, { useContext } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { NavigationContext } from "../App";
import { X } from "lucide-react";

export function SignupModal() {
  const { navigation, setNavigation } = useContext(NavigationContext);

  const handleClose = () => {
    setNavigation({ showSignupModal: false });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup success
    setNavigation({ 
      showSignupModal: false, 
      currentView: 'dashboard' 
    });
  };

  const handleLoginClick = () => {
    setNavigation({ 
      showSignupModal: false, 
      showLoginModal: true 
    });
  };

  return (
    <Dialog open={navigation.showSignupModal} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Join Kaniro</DialogTitle>
          <DialogDescription className="text-center">
            Create your account to start your financial journey with us
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSignup} className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="First name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <input type="checkbox" className="rounded border-gray-300" required />
            <span className="text-gray-600">
              I agree to the{" "}
              <button type="button" className="text-blue-600 hover:text-blue-700">
                Terms of Service
              </button>{" "}
              and{" "}
              <button type="button" className="text-blue-600 hover:text-blue-700">
                Privacy Policy
              </button>
            </span>
          </div>
          
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Create Account
          </Button>
          
          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={handleLoginClick}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Login
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}