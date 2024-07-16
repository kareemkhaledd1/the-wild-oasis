import { cabin } from "../utils/types";
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

// export async function createEditCabin(newCabin: cabin, id?: number) {
//   console.log(newCabin, id);
//
//   const hasImage = newCabin.image.startsWith(supabaseUrl);
//
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replace(
//     /\//g,
//     ''
//   );
//
//   const imagePath = hasImage
//     ? newCabin.image
//     : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
//
//   // https://qvnuxqcusferdbhokfbn.supabase.co/storage/v1/object/public/cabin-images/cabin_001.jpg
//
//   let query;
//   if (!id) {
//     query = supabase.from('cabins').insert([{ ...newCabin, image: imagePath }]);
//   } else {
//     query = supabase
//       .from('cabins')
//       .update({ ...newCabin, image: imagePath })
//       .eq('id', id);
//   }
//
//   const { data, error } = await query.select().single();
//
//   if (error) {
//     console.error(error);
//     throw new Error('Cabins could not be created');
//   }
//
//   const { error: storageError } = await supabase.storage
//     .from('cabin-images')
//     .upload(imageName, newCabin.image);
//
//   if (storageError) {
//     await supabase.from('cabins').delete().eq('id', data[0].id);
//     console.error(storageError);
//     throw new Error('Image could not be uploaded');
//   }
//
//   return data;
// }

export async function createEditCabin(newCabin: cabin, id?: number) {
  let imagePath: string | undefined;
  let imageName: string | undefined;

  if (
    typeof newCabin.image === "string" &&
    newCabin.image.startsWith(supabaseUrl)
  ) {
    imagePath = newCabin.image;
  } else if (newCabin.image instanceof File) {
    imageName = `${Math.random()}-${newCabin.image.name}`.replace(/\//g, "");
    imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  }

  let query;

  if (!id) {
    query = supabase.from("cabins").insert([{ ...newCabin, image: imagePath }]);
  } else {
    query = supabase
      .from("cabins")
      .update({ ...newCabin, image: imagePath })
      .eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (imagePath && !imageName) {
    return data;
  }

  if (error) {
    throw new Error("Failed to create or update cabin");
  }

  if (imageName && imagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data?.id);
      throw new Error("Failed to upload image");
    }
  }
  return data;
}

export async function deleteCabin(id: number) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}
