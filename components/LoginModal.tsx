import React, { useContext } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { NavigationContext } from "../App";
import { X } from "lucide-react";

export function LoginModal() {
  const { navigation, setNavigation } = useContext(NavigationContext);

  const handleClose = () => {
    setNavigation({ showLoginModal: false });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login success
    setNavigation({ 
      showLoginModal: false, 
      currentView: 'dashboard' 
    });
  };

  const handleSignupClick = () => {
    setNavigation({ 
      showLoginModal: false, 
      showSignupModal: true 
    });
  };

  return (
    <Dialog open={navigation.showLoginModal} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Login to Kaniro</DialogTitle>
          <DialogDescription className="text-center">
            Enter your credentials to access your financial dashboard
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleLogin} className="space-y-4 pt-4">
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
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Remember me</span>
            </label>
            <button
              type="button"
              className="text-blue-600 hover:text-blue-700"
            >
              Forgot password?
            </button>
          </div>
          
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Login
          </Button>
          
          <div className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={handleSignupClick}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign up
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}