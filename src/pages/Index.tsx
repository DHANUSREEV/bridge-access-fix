import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="mb-4 text-4xl font-bold">NeuroBridge</h1>
        <p className="text-xl text-muted-foreground">Advanced accessibility settings for enhanced user experience</p>
        <Link to="/accessibility">
          <Button className="inline-flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Go to Accessibility Settings
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
