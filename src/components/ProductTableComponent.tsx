"use client";
import { columns } from "@/app/columns";
import { IProduct } from "@/common/interface";
import { fetchReviews } from "@/services";
import { useState } from "react";
import { DataTable } from "./DataTable";
import ProductReviewModal from "./ProductReviewModal";

const ProductTableComponent = ({ productsRes }: any) => {
  const [modalData, setModalData] = useState<any>(null);

  /**
   * Function responsible to fetch the product review details
   */
  const fetchReviewData = async (row: any) => {
    try {
      const reviewsRes = await fetchReviews(row?.original?.id);
      setModalData({ ...reviewsRes });
    } catch (error) {
      setModalData(null);
    }
  };
  const newColumns = columns(fetchReviewData);

  return (
    <div>
      <ProductReviewModal
        productInfo={modalData as any}
        setModalData={setModalData}
      />
      <DataTable columns={newColumns} data={productsRes as IProduct[]} />
    </div>
  );
};

export default ProductTableComponent;
