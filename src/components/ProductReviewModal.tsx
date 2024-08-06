"use client";
import { IProduct } from "@/common/interface";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IProps {
  productInfo: IProduct;
  setModalData: Dispatch<SetStateAction<IProduct | null>>;
}

const ProductReviewModal = ({ productInfo, setModalData }: IProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  /**
   * To update the product data.
   */
  useEffect(() => {
    if (productInfo) {
      setIsDialogOpen(true);
    }
  }, [productInfo]);

  /**
   * To handle the Dialog close.
   */
  const handleClose = () => {
    setIsDialogOpen(false);
    setModalData(null);
  };

  return (
    <Dialog
      open={isDialogOpen}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "80%", // Adjust the width as needed
          maxWidth: "none", // Optional: Remove the default maxWidth constraint
        },
      }}
    >
      <DialogTitle>Reviews for {productInfo?.title}</DialogTitle>
      <DialogContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Reviewer Name</TableCell>
                <TableCell>Reviewer Email</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Comment</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productInfo?.reviews?.map((review: any, reviewIndex: number) => (
                <TableRow key={`${review?.reviewerEmail}_${reviewIndex}`}>
                  <TableCell>{review.reviewerName}</TableCell>
                  <TableCell>{review.reviewerEmail}</TableCell>
                  <TableCell>{review.rating}</TableCell>
                  <TableCell>{review.comment}</TableCell>
                  <TableCell>
                    {new Date(review.date).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductReviewModal;
