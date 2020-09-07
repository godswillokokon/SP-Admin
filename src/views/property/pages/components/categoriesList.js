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
  createSubcategory,
  editLandCategory,
  editHouseCategory,
} from "store/categories/actions";
import Modal from "components/Modal";
import Input from "components/Input";

export default function CategoriesList({ type, categories }) {
  const actionLoading = useSelector(
    (state) => state.categories.actionLoading
  );
  const [viewCategories, setViewCategories] = React.useState(false);
  const [category, setCategory] = React.useState("");
  const [categoryType, setCategoryType] = React.useState("");
  const dispatch = useDispatch();
  const [deleteDialog, setDeleteDialog] = React.useState(false);
  const [subCategory, setSubCategory] = React.useState([]);
  const [categoryName, setCategoryName] = React.useState("");
  const [newSubCategory, setNewSubCategory] = React.useState({});
  const [editModal, setEditModal] = React.useState(false);
  const [editData, setEditData] = React.useState({});

  return (
    <>
      <Modal
        isOpen={editModal}
        onClose={() => {
          setEditModal(!editModal);
          setCategoryName("");
        }}
        children={
          <>
            <h6>Edit {categoryName} category</h6>
            <TabForm>
              <Input
                id="category_name"
                name="category_name"
                placeholder="Category Name"
                fullwidth
                onChange={(e) => {
                  editData.category_name = e.target.value;
                  setEditData({ ...editData });
                }}
              />
              <Button
                loading={actionLoading}
                onClick={() => {
                  categoryType === "Land"
                    ? dispatch(
                        editLandCategory(categoryName, editData)
                      ).then((res) => {
                        if (res) {
                          dispatch(getLandCategories());
                          toastSuccess(
                            "Category Edited Successfully"
                          );
                          setEditModal(!editModal);
                        }
                      })
                    : dispatch(
                        editHouseCategory(categoryName, editData)
                      ).then((res) => {
                        if (res) {
                          dispatch(getHouseCategories());
                          toastSuccess(
                            "Category Edited Successfully"
                          );
                          setEditModal(!editModal);
                        }
                      });
                }}
              >
                Submit
              </Button>
            </TabForm>
          </>
        }
      />
      <Modal
        isOpen={viewCategories}
        onClose={() => {
          setViewCategories(!viewCategories);
          setCategoryName("");
        }}
        children={
          <>
            <h6>{categoryName} Sub-categories</h6>
            <TabForm>
              <Input
                placeholder="Sub Category Name"
                id="subcategory_name"
                name="subcategory_name"
                fullwidth
                onChange={(e) => {
                  newSubCategory.subcategory_name = e.target.value;
                  setNewSubCategory({ ...newSubCategory });
                }}
              />
              <Button
                loading={actionLoading}
                onClick={() => {
                  dispatch(
                    createSubcategory(categoryName, newSubCategory)
                  ).then((res) => {
                    if (res) {
                      dispatch(getHouseCategories());
                      toastSuccess(
                        "Sub Category Created Successfully"
                      );
                    }
                  });
                }}
              >
                Submit
              </Button>
            </TabForm>
            <Table>
              <thead>
                <tr>
                  {headers.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {subCategory?.map((subcategory, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{subcategory.subcategory_name}</td>
                    <td>
                      <Stack>
                        <Button small>Edit</Button>
                        <Button
                          small
                          danger
                          // onClick={() => {
                          //   setCategoryType("Land");
                          //   setCategory(category.land_category);
                          //   setDeleteDialog(!deleteDialog);
                          // }}
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
        }
      />
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
              <th key={header}>{header}</th>
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
                    <Button
                      small
                      onClick={() => {
                        setCategoryType("Land");
                        setCategoryName(category.land_category);
                        setEditModal(!editModal);
                      }}
                    >
                      Edit
                    </Button>
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
                    <Button
                      small
                      onClick={() => {
                        setCategoryType("House");
                        setCategoryName(category.house_category);
                        setEditModal(!editModal);
                      }}
                    >
                      Edit
                    </Button>
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
                    <Button
                      small
                      onClick={() => {
                        setSubCategory(category.sub_category);
                        setCategoryName(category.house_category);
                        setViewCategories(!viewCategories);
                      }}
                    >
                      View
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

const TabForm = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    margin: 10px;
  }
`;
