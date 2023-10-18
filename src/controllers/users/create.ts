import { TypedRequestBody, TypedResponse } from '../../utils/Types'

const createUser = async (
  req: TypedRequestBody<{ email: string; password: string }>,
  res: TypedResponse<{}>
) => {
  console.log({ req: req.body })
}

module.exports = { createUser }
