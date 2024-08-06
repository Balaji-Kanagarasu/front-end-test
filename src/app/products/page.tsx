import { columns } from "@/app/columns";
import { Product } from "@/common/interface";
import { DataTable } from "@/components/DataTable";
import { getProductDetails } from "@/services";

const ProductsPage = async () => {
  const productsRes: Product[] | [{ message: string }] =
    await getProductDetails();

  return (
    <div>
      <DataTable columns={columns} data={productsRes as Product[]} />
    </div>
  );
};

export default ProductsPage;
