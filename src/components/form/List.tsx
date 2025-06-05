import React, {useState} from 'react';
import { Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Trash2, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';

interface ListProps {
  column1Header: string;
  column2Header: string;
  column1Placeholder: string;
  column2Placeholder: string;
  addButtonText?: string;
  emptyItemName?: string;
  containerClass?: string;
  label: string;
  required?: boolean;
  initialData?: { id: string; col1: string; col2: string }[];
  onDataChange?: (data: { id: string; col1: string; col2: string }[]) => void;
}

export type row = {
  id: string,
  col1: string,
  col2: string
}

export const List = ({
  column1Header,
  column2Header,
  column1Placeholder,
  column2Placeholder,
  addButtonText = "Add Item",
  emptyItemName = "items",
  initialData = [],
  containerClass,
  label,
  required = false,
  onDataChange,
}: ListProps) => {
    const [items, setItems] = useState<{id: string; col1: string; col2: string}[]>(initialData);
    const [newItem, setNewItem] = useState({col1: '', col2: ''});
    const [errors,setErrors] = useState({col1: false, col2: false});

    const handleAddItem = () => {
      let hasError = false;
      const newErrors = {col1: false, col2: false};

      if (!newItem.col1.trim()) {
        newErrors.col1 = true;
        hasError = true;
      }
      
      if (!newItem.col2.trim()) {
        newErrors.col2 = true;
        hasError = true;
      }

      setErrors(newErrors);

      if (hasError) return;

      const updatedItems = [...items, {...newItem, id: Math.random().toString(36)}];
      setItems(updatedItems);
      setNewItem({col1: '', col2:''});
      setErrors({col1: false, col2: false});

      if (onDataChange) onDataChange(updatedItems);
    }

    const handleRemoveItem = (id: string) => {
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
      if (onDataChange) onDataChange(updatedItems);
    }

    const handleInputChange = (field: 'col1' | 'col2', value: string) => {
      setNewItem(prev => ({ ...prev, [field]: value }));
      
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: false }));
      }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAddItem();
      }
    };

    return (
      <div className={cn("space-y-2", containerClass)}>
        <Label className="text-lg text-white mb-5">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      <div className="rounded-md border">
        <Table className=' border-2'>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[45%]">{column1Header}</TableHead>
              <TableHead className="w-[45%]">{column2Header}</TableHead>
              <TableHead className="w-[10%] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.length > 0 ? (
              items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.col1}</TableCell>
                  <TableCell>{item.col2}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveItem(item.id)}
                      aria-label={`Remove ${item.col1}`}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="h-24 text-center text-muted-foreground">
                  No {emptyItemName} yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-end gap-4 flex-wrap">
        <div className="flex-1 min-w-[200px]">
          <label className="text-sm font-medium text-white mb-2 block">
            {column1Header}
          </label>
          <Input
            value={newItem.col1}
            onChange={(e) => handleInputChange('col1', e.target.value)}
            placeholder={column1Placeholder}
            onKeyDown={handleKeyPress}
            className={errors.col1 ? 'border-red-500' : ''}
          />
          {errors.col1 && (
            <p className="mt-1 text-xs text-red-500">This field is required</p>
          )}
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="text-sm font-medium text-white mb-2 block">
            {column2Header}
          </label>
          <Input
            value={newItem.col2}
            onChange={(e) => handleInputChange('col2', e.target.value)}
            placeholder={column2Placeholder}
            onKeyDown={handleKeyPress}
            className={errors.col2 ? 'border-red-500' : ''}
          />
          {errors.col2 && (
            <p className="mt-1 text-xs text-red-500">This field is required</p>
          )}
        </div>
        <div className="flex  w-full justify-center">
          <Button
            type="button"
            onClick={handleAddItem}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            {addButtonText}
          </Button>
        </div>
      </div>
    </div>
    )
}