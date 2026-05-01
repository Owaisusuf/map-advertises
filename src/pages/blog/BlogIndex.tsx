import { Link } from "react-router-dom";
import { SEOPageLayout } from "@/components/layout/SEOPageLayout";

const BLOG_POSTS = [
  { title: "Printing Cost in Srinagar: Complete Price Guide", href: "/blog/printing-cost-in-srinagar" },
  { title: "Flex vs Vinyl Printing: Which is Better for Your Business?", href: "/blog/flex-vs-vinyl-printing" },
  { title: "Top 10 Signage Ideas for Shops in Kashmir", href: "/blog/signage-ideas-shops-kashmir" },
  { title: "Best Advertising Methods for Local Businesses in Srinagar", href: "/blog/advertising-methods-srinagar" },
  { title: "How to Choose the Right Printing Service in Kashmir", href: "/blog/choosing-printing-service-kashmir" },
  { title: "Best printing services in Srinagar", href: "/blog/best-printing-services-srinagar" },
  { title: "ACP vs flex boards", href: "/blog/acp-vs-flex-boards" },
  { title: "How to choose signage in Srinagar", href: "/blog/how-to-choose-signage-srinagar" },
  { title: "Branding tips for local businesses", href: "/blog/branding-tips-local-businesses" },
  { title: "Hoarding advertising guide", href: "/blog/hoarding-advertising-guide" },
  { title: "Benefits of ACP boards", href: "/blog/benefits-of-acp-boards" },
  { title: "Printing mistakes to avoid", href: "/blog/printing-mistakes-to-avoid" },
  { title: "Outdoor advertising in Kashmir", href: "/blog/outdoor-advertising-kashmir" },
];

const BlogIndex = () => {
  return (
    <SEOPageLayout
      title="Blog & Insights | MAP Advertisers"
      description="Read our latest insights on printing services, branding tips, signage guides, and advertising strategies in Srinagar, Kashmir."
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          Blog & Insights
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-12">
          Explore our latest articles, guides, and tips on printing, branding, and signage in Kashmir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post, idx) => (
            <Link key={idx} to={post.href} className="p-6 rounded-2xl glass-strong border border-border/50 hover:border-gold/50 transition-colors group no-underline">
              <h3 className="text-xl font-bold mt-0 mb-4 group-hover:text-gold transition-colors">{post.title}</h3>
              <div className="text-sm font-medium text-brand flex items-center gap-2">
                Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SEOPageLayout>
  );
};

export default BlogIndex;
