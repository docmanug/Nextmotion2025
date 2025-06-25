import type { BlogPost, Category } from '@/types';

export interface BlogSidebarProps {
  t: (key: string) => string;
  categories: Category[];
  popularPosts: BlogPost[];
  selectedCategoryId?: string | null;
  handleCategoryClick?: (categoryId: string) => void;
  topicsKey?: string;
}