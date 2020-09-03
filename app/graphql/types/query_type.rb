module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :me, Types::UserType, null: true
    field :items,
          [Types::ItemType],
          null: false,
          description: 'return all items '

    def items
      Item.preload(:user)
    end

    def me
      context[:current_user]
    end
  end
end
