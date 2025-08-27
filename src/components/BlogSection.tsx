import React, { useContext, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  TrendingUp, 
  CreditCard, 
  Building2, 
  Shield, 
  Smartphone, 
  Globe,
  BookOpen,
  Filter,
  Tag,
  Heart,
  Share2,
  Eye
} from "lucide-react";
import { NavigationContext } from "../App";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Banking in Tier 2/3 India",
    excerpt: "Exploring how digital-first banking solutions are revolutionizing financial inclusion in smaller cities and rural areas across India.",
    content: "As India continues its digital transformation journey, the banking sector is witnessing unprecedented changes...",
    author: "Priya Sharma",
    authorRole: "Head of Research",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Digital Banking",
    tags: ["Digital Banking", "Financial Inclusion", "Tier 2/3 Cities"],
    featured: true,
    views: 1250,
    likes: 89,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYmFua2luZyUyMGluZGlhfGVufDF8fHx8MTc1NTU4ODE5MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    title: "Micro-Deposits: Building Financial Resilience ₹10 at a Time",
    excerpt: "How small daily savings can create significant financial impact for underserved communities and promote long-term wealth building.",
    content: "The concept of micro-deposits isn't new, but its implementation through digital platforms is transforming...",
    author: "Rajesh Kumar",
    authorRole: "Product Manager",
    date: "2024-12-12",
    readTime: "4 min read",
    category: "Savings",
    tags: ["Micro Deposits", "Savings", "Financial Planning"],
    featured: false,
    views: 892,
    likes: 67,
    image: "https://images.unsplash.com/photo-1559526324-593bc054d0cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXZpbmdzJTIwYWNjb3VudHxlbnwxfHx8fDE3NTU1ODgxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "NPA Recovery Revolution: Technology Meets Compassion",
    excerpt: "Understanding how flexible repayment solutions are helping borrowers rebuild their financial standing while reducing banking sector NPAs.",
    content: "Non-Performing Assets (NPAs) have been a significant challenge for the Indian banking sector...",
    author: "Dr. Anita Menon",
    authorRole: "Financial Policy Expert",
    date: "2024-12-10",
    readTime: "6 min read",
    category: "Loan Recovery",
    tags: ["NPA Recovery", "Loan Management", "Banking"],
    featured: false,
    views: 743,
    likes: 52,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2FuJTIwcmVjb3Zlcnl8ZW58MXx8fHwxNzU1NTg4MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    title: "Mobile-First Banking: Designing for Bharat",
    excerpt: "Key design principles and user experience considerations when building banking applications for India's diverse mobile-first population.",
    content: "With over 750 million smartphone users in India, mobile-first banking design has become crucial...",
    author: "Kavya Patel",
    authorRole: "UX Design Lead",
    date: "2024-12-08",
    readTime: "7 min read",
    category: "UX Design",
    tags: ["Mobile Banking", "UX Design", "User Experience"],
    featured: true,
    views: 1456,
    likes: 112,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwfGVufDF8fHx8MTc1NTU4ODE5MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    title: "Financial Literacy: The Foundation of Inclusion",
    excerpt: "Why financial education must accompany digital banking solutions to truly empower underserved communities in India.",
    content: "As we build more sophisticated financial products, the importance of financial literacy becomes paramount...",
    author: "Suresh Reddy",
    authorRole: "Community Outreach Director",
    date: "2024-12-05",
    readTime: "5 min read",
    category: "Education",
    tags: ["Financial Literacy", "Education", "Community"],
    featured: false,
    views: 634,
    likes: 45,
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBlZHVjYXRpb258ZW58MXx8fHwxNzU1NTg4MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    title: "Regulatory Compliance in Digital Banking",
    excerpt: "Navigating RBI guidelines and ensuring compliance while building innovative digital banking solutions for the masses.",
    content: "The Reserve Bank of India has been proactive in creating frameworks for digital banking...",
    author: "Advocate Meera Singh",
    authorRole: "Legal & Compliance Head",
    date: "2024-12-03",
    readTime: "8 min read",
    category: "Compliance",
    tags: ["Regulation", "Compliance", "RBI Guidelines"],
    featured: false,
    views: 521,
    likes: 38,
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWd1bGF0aW9uJTIwY29tcGxpYW5jZXxlbnwxfHx8fDE3NTU1ODgxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const categories = [
  { name: "All", icon: BookOpen, count: blogPosts.length },
  { name: "Digital Banking", icon: Smartphone, count: 2 },
  { name: "Savings", icon: TrendingUp, count: 1 },
  { name: "Loan Recovery", icon: CreditCard, count: 1 },
  { name: "UX Design", icon: Globe, count: 1 },
  { name: "Education", icon: User, count: 1 },
  { name: "Compliance", icon: Shield, count: 1 }
];

export function BlogSection() {
  const { setNavigation } = useContext(NavigationContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleReadMore = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  // Single Blog Post View
  if (selectedPost) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 relative overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button 
                variant="ghost" 
                onClick={handleBackToBlog}
                className="mb-6 hover:bg-blue-50"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Blog
              </Button>
              
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  {selectedPost.category}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {selectedPost.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{selectedPost.author}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm">{selectedPost.authorRole}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Eye className="w-4 h-4" />
                    <span>{selectedPost.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Heart className="w-4 h-4" />
                    <span>{selectedPost.likes} likes</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ImageWithFallback
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div 
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {selectedPost.excerpt}
              </p>
              
              <div className="space-y-6 text-gray-700">
                <p>{selectedPost.content}</p>
                <p>
                  This digital transformation is not just about technology; it's about creating meaningful change in people's lives. 
                  By leveraging mobile-first design principles and understanding the unique challenges faced by underserved communities, 
                  we can build financial products that truly make a difference.
                </p>
                <p>
                  The key to successful implementation lies in maintaining a balance between innovation and accessibility, 
                  ensuring that advanced financial services remain simple and intuitive for users across all demographics.
                </p>
                <p>
                  As we continue to evolve and expand our services, the focus remains on empowering individuals and communities 
                  through technology that serves their specific needs and aspirations.
                </p>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Main Blog Listing View
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: 360,
          x: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: -360,
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-4 py-2 rounded-full mb-6 border border-blue-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <BookOpen className="size-4" />
              </motion.div>
              DigiDabba Blog & Insights
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Financial Innovation
              </span>
              <br />
              <span className="text-gray-900">Insights & Stories</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover the latest trends, insights, and stories from the world of fintech, 
              digital banking, and financial inclusion in India.
            </motion.p>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search articles, topics, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-3 text-lg border-gray-200 focus:border-blue-300 focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <Badge variant="secondary" className="ml-1 text-xs bg-gray-100 text-gray-600">
                    {category.count}
                  </Badge>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group">
                      <div className="relative overflow-hidden">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                            Featured
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="p-6 space-y-4">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                            {post.category}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </div>
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleReadMore(post)}
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 group-hover:translate-x-1 transition-all"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Regular Posts */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group h-full">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-5 space-y-3 flex flex-col h-full">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      
                      <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleReadMore(post)}
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-1"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Card className="p-12 bg-gradient-to-br from-blue-50 via-white to-green-50 border-0 shadow-2xl relative overflow-hidden">
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-green-200/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h3>
                <p className="text-gray-600 mb-8">
                  Get the latest insights on fintech, digital banking, and financial inclusion 
                  delivered straight to your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    placeholder="Enter your email address"
                    className="flex-1 border-gray-200 focus:border-blue-300"
                  />
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    Subscribe
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}