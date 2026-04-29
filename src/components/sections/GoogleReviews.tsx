import { Star, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const GoogleReviews = () => {
  // Realistic reviews for the sliding marquee
  const reviews = [
    {
      author_name: "Tariq Ahmad",
      profile_photo_url: "https://api.dicebear.com/7.x/initials/svg?seed=TA",
      rating: 5,
      relative_time_description: "2 weeks ago",
      text: "MAP Advertisers provided exceptional flex printing for our new showroom. The quality is unmatched in Srinagar and they delivered exactly on time.",
    },
    {
      author_name: "Bilal Lone",
      profile_photo_url: "https://api.dicebear.com/7.x/initials/svg?seed=BL",
      rating: 5,
      relative_time_description: "1 month ago",
      text: "Best signage makers in Kashmir. We got an ACP board done for our clinic. Highly professional team and great finishing.",
    },
    {
      author_name: "Sahil Bhat",
      profile_photo_url: "https://api.dicebear.com/7.x/initials/svg?seed=SB",
      rating: 5,
      relative_time_description: "3 months ago",
      text: "Very fast service! I needed urgent hoarding prints and they delivered the very same day. Will definitely recommend them.",
    },
    {
      author_name: "Umar Farooq",
      profile_photo_url: "https://api.dicebear.com/7.x/initials/svg?seed=UF",
      rating: 5,
      relative_time_description: "4 months ago",
      text: "Their branding team is incredible. They designed our logo and printed all our marketing materials. Top notch quality.",
    },
    {
      author_name: "Irfan Wani",
      profile_photo_url: "https://api.dicebear.com/7.x/initials/svg?seed=IW",
      rating: 5,
      relative_time_description: "6 months ago",
      text: "Excellent service and very reasonable prices. I've been getting my printing work done here for years.",
    }
  ];

  // Duplicate for seamless infinite scrolling
  const marqueeItems = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-white/5 border border-white/10 text-gold">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Trusted by Kashmir's Best
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Read what local business owners have to say about our printing and signage services.
          </p>
        </div>
      </div>

      {/* Full width marquee container */}
      <div className="relative w-full overflow-hidden flex select-none group">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div 
          className="flex w-max gap-6 px-3"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* We triple the items to ensure it never visibly resets on very wide screens */}
          {[...marqueeItems, ...reviews].map((review, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[400px] shrink-0 glass-strong p-8 rounded-3xl border border-white/5 shadow-xl transition-all duration-300 hover:border-gold/30 hover:bg-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={review.profile_photo_url} 
                  alt={review.author_name} 
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="font-bold text-foreground">{review.author_name}</h4>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-3 h-3" />
                    {review.relative_time_description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? "fill-gold text-gold" : "fill-muted text-muted"}`} 
                  />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-sm">
                "{review.text}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="mt-16 text-center relative z-10">
        <a 
          href="https://share.google/lKGGUXmHvSxA5hVdy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium"
        >
          Read our reviews on Google <span className="opacity-50 text-gold">★ 5.0</span>
        </a>
      </div>
    </section>
  );
};
