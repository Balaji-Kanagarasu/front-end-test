"use client";
import { Product, Review } from "@/common/interface";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { useEffect, useState } from "react";

const ProductReviewModal = ({ productInfo }: { productInfo: Product }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(
    productInfo ?? null
  );
  const [reviews, setReviews] = useState<Review[]>(productInfo?.reviews ?? []);
  const [isDialogOpen, setIsDialogOpen] = useState(!!productInfo);

  useEffect(() => {
    return () => {
      setSelectedProduct(null);
      setReviews([]);
    };
  }, []);

  return (
    <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
      <DialogTitle>Reviews for {selectedProduct?.title}</DialogTitle>
      <DialogContent>
        <List>
          {reviews.map((review) => (
            <ListItem key={review.id}>
              <Typography variant="body1">{review.review}</Typography>
              <Typography variant="body2">Rating: {review.rating}</Typography>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductReviewModal;
