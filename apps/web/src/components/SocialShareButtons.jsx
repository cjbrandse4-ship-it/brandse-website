
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const SocialShareButtons = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`
  };

  return (
    <div className="flex items-center space-x-4 py-6 border-t border-b border-gray-200 my-8">
      <span className="text-gray-700 font-semibold">Share this article:</span>
      <a 
        href={shareLinks.facebook} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-600 transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a 
        href={shareLinks.twitter} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-400 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a 
        href={shareLinks.linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-700 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      <a 
        href={shareLinks.email} 
        className="text-gray-500 hover:text-gray-900 transition-colors"
        aria-label="Share via Email"
      >
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
};

export default SocialShareButtons;
