import React from "react";
import { Table } from "reactstrap";
import Button from "components/Button";
import ConfirmDialog from "components/ConfirmDialog";
import Styled from "styled-components";
import {
  deleteHouseCategory,
  deleteLandCategory,
} from "store/categories/actions";
import { useDispatch, useSelector } from "react-redux";
import { toastSuccess } from "utils/Toast";
import {
  getHouseCategories,
  getLandCategories,
} from "store/categories/actions";

export default function CategoriesList({ type, categories }) {
  const actionLoading = useSelector(
    (state) => state.categories.actionLoading
  );
  const [category, setCategory] = React.useState("");
  const [categoryType, setCategoryType] = React.useState("");
  const dispatch = useDispatch();
  const [deleteDialog, setDeleteDialog] = React.useState(false);
  return (
    <>
      <ConfirmDialog
        open={deleteDialog}
        onClose={() => setDeleteDialog(!deleteDialog)}
        title={"Delete Category"}
        description={"Are you Sure you want to delete this category"}
        okText={"Yes"}
        cancelText={"No"}
        onSubmit={() => {
          categoryType === "Land"
            ? dispatch(deleteLandCategory(category)).then((res) => {
                if (res) {
                  toastSuccess("Category Deleted Successfully");
                  dispatch(getLandCategories());
                  setDeleteDialog(!deleteDialog);
                  setCategory("");
                }
              })
            : dispatch(deleteHouseCategory(category)).then((res) => {
                if (res) {
                  toastSuccess("Category Deleted Successfully");
                  dispatch(getHouseCategories());
                  setDeleteDialog(!deleteDialog);
                  setCategory("");
                }
              });
        }}
        loading={actionLoading}
      />
      <Table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {type === "land" &&
            categories?.land_categories?.map((category, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{category.land_category}</td>
                <td>
                  <Stack>
                    <Button small>Edit</Button>
                    <Button
                      small
                      danger
                      onClick={() => {
                        setCategoryType("Land");
                        setCategory(category.land_category);
                        setDeleteDialog(!deleteDialog);
                      }}
                    >
                      Delete
                    </Button>
                  </Stack>
                </td>
              </tr>
            ))}
          {type === "house" &&
            categories?.map((category, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{category.house_category}</td>
                <td>
                  <Stack>
                    <Button small>Edit</Button>
                    <Button
                      small
                      danger
                      onClick={() => {
                        setCategoryType("House");
                        setCategory(category.house_category);
                        setDeleteDialog(!deleteDialog);
                      }}
                    >
                      Delete
                    </Button>
                  </Stack>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

const headers = ["S/N", "Name", "Actions"];

const Stack = Styled.div`
display: flex;
justify-content: center;
`;
