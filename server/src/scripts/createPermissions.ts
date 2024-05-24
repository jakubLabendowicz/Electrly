import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const permissions = [
    {
        name: "Full access",
        code: "FULL_ACCESS",
        description: "Provides full access"
    },
    {
        name: "Create any user",
        code: "CREATE_ANY_USER",
        description: "Provides creation of any user",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find any user",
        code: "FIND_ANY_USER",
        description: "Provides finding any user",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find own user",
        code: "FIND_OWN_USER",
        description: "Provides finding own user",
        parentPermissionCode: "FIND_ANY_USER"
    },
    {
        name: "Update any user",
        code: "UPDATE_ANY_USER",
        description: "Provides updating any user",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Update own user",
        code: "UPDATE_OWN_USER",
        description: "Provides updating own user",
        parentPermissionCode: "UPDATE_ANY_USER"
    },
    {
        name: "Delete any user",
        code: "DELETE_ANY_USER",
        description: "Provides deleting any user",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Delete own user",
        code: "DELETE_OWN_USER",
        description: "Provides deleting own user",
        parentPermissionCode: "DELETE_ANY_USER"
    },
    {
        name: "Create any user deactivation code",
        code: "CREATE_ANY_USER_DEACTIVATION_CODE",
        description: "Provides creation of any user deactivation code",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Create own user deactivation code",
        code: "CREATE_OWN_USER_DEACTIVATION_CODE",
        description: "Provides creation of own user deactivation code",
        parentPermissionCode: "CREATE_ANY_USER_DEACTIVATION_CODE"
    },
    {
        name: "Find any user deactivation code",
        code: "FIND_ANY_USER_DEACTIVATION_CODE",
        description: "Provides finding any user deactivation code",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find own user deactivation code",
        code: "FIND_OWN_USER_DEACTIVATION_CODE",
        description: "Provides finding own user deactivation code",
        parentPermissionCode: "FIND_ANY_USER_DEACTIVATION_CODE"
    },
    {
        name: "Update any user deactivation code",
        code: "UPDATE_ANY_USER_DEACTIVATION_CODE",
        description: "Provides updating any user deactivation code",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Update own user deactivation code",
        code: "UPDATE_OWN_USER_DEACTIVATION_CODE",
        description: "Provides updating own user deactivation code",
        parentPermissionCode: "UPDATE_ANY_USER_DEACTIVATION_CODE"
    },
    {
        name: "Delete any user deactivation code",
        code: "DELETE_ANY_USER_DEACTIVATION_CODE",
        description: "Provides deleting any user deactivation code",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Delete own user deactivation code",
        code: "DELETE_OWN_USER_DEACTIVATION_CODE",
        description: "Provides deleting own user deactivation code",
        parentPermissionCode: "DELETE_ANY_USER_DEACTIVATION_CODE"
    },
    {
        name: "Create any user email notification",
        code: "CREATE_ANY_USER_EMAIL_NOTIFICATION",
        description: "Provides creation of any user email notification",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Create own user email notification",
        code: "CREATE_OWN_USER_EMAIL_NOTIFICATION",
        description: "Provides creation of own user email notification",
        parentPermissionCode: "CREATE_ANY_USER_EMAIL_NOTIFICATION"
    },
    {
        name: "Find any user email notification",
        code: "FIND_ANY_USER_EMAIL_NOTIFICATION",
        description: "Provides finding any user email notification",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find own user email notification",
        code: "FIND_OWN_USER_EMAIL_NOTIFICATION",
        description: "Provides finding own user email notification",
        parentPermissionCode: "FIND_ANY_USER_EMAIL_NOTIFICATION"
    },
    {
        name: "Update any user email notification",
        code: "UPDATE_ANY_USER_EMAIL_NOTIFICATION",
        description: "Provides updating any user email notification",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Update own user email notification",
        code: "UPDATE_OWN_USER_EMAIL_NOTIFICATION",
        description: "Provides updating own user email notification",
        parentPermissionCode: "UPDATE_ANY_USER_EMAIL_NOTIFICATION"
    },
    {
        name: "Delete any user email notification",
        code: "DELETE_ANY_USER_EMAIL_NOTIFICATION",
        description: "Provides deleting any user email notification",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Delete own user email notification",
        code: "DELETE_OWN_USER_EMAIL_NOTIFICATION",
        description: "Provides deleting own user email notification",
        parentPermissionCode: "DELETE_ANY_USER_EMAIL_NOTIFICATION"
    },
    {
        name: "Create any user password code",
        code: "CREATE_ANY_USER_PASSWORD_CODE",
        description: "Provides creation of any user password code",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Create own user password code",
        code: "CREATE_OWN_USER_PASSWORD_CODE",
        description: "Provides creation of own user password code",
        parentPermissionCode: "CREATE_ANY_USER_PASSWORD_CODE"
    },
    {
        name: "Find any user password code",
        code: "FIND_ANY_USER_PASSWORD_CODE",
        description: "Provides finding any user password code",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find own user password code",
        code: "FIND_OWN_USER_PASSWORD_CODE",
        description: "Provides finding own user password code",
        parentPermissionCode: "FIND_ANY_USER_PASSWORD_CODE"
    },
    {
        name: "Update any user password code",
        code: "UPDATE_ANY_USER_PASSWORD_CODE",
        description: "Provides updating any user password code",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Update own user password code",
        code: "UPDATE_OWN_USER_PASSWORD_CODE",
        description: "Provides updating own user password code",
        parentPermissionCode: "UPDATE_ANY_USER_PASSWORD_CODE"
    },
    {
        name: "Delete any user password code",
        code: "DELETE_ANY_USER_PASSWORD_CODE",
        description: "Provides deleting any user password code",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Delete own user password code",
        code: "DELETE_OWN_USER_PASSWORD_CODE",
        description: "Provides deleting own user password code",
        parentPermissionCode: "DELETE_ANY_USER_PASSWORD_CODE"
    },
    {
        name: "Create any user password",
        code: "CREATE_ANY_USER_PASSWORD",
        description: "Provides creation of any user password",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Create own user password",
        code: "CREATE_OWN_USER_PASSWORD",
        description: "Provides creation of own user password",
        parentPermissionCode: "CREATE_ANY_USER_PASSWORD"
    },
    {
        name: "Find any user password",
        code: "FIND_ANY_USER_PASSWORD",
        description: "Provides finding any user password",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find own user password",
        code: "FIND_OWN_USER_PASSWORD",
        description: "Provides finding own user password",
        parentPermissionCode: "FIND_ANY_USER_PASSWORD"
    },
    {
        name: "Update any user password",
        code: "UPDATE_ANY_USER_PASSWORD",
        description: "Provides updating any user password",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Update own user password",
        code: "UPDATE_OWN_USER_PASSWORD",
        description: "Provides updating own user password",
        parentPermissionCode: "UPDATE_ANY_USER_PASSWORD"
    },
    {
        name: "Delete any user password",
        code: "DELETE_ANY_USER_PASSWORD",
        description: "Provides deleting any user password",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Delete own user password",
        code: "DELETE_OWN_USER_PASSWORD",
        description: "Provides deleting own user password",
        parentPermissionCode: "DELETE_ANY_USER_PASSWORD"
    },
    {
        name: "Create any user role",
        code: "CREATE_ANY_USER_ROLE",
        description: "Provides creation of any user role",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Create own user role",
        code: "CREATE_OWN_USER_ROLE",
        description: "Provides creation of own user role",
        parentPermissionCode: "CREATE_ANY_USER_ROLE"
    },
    {
        name: "Find any user role",
        code: "FIND_ANY_USER_ROLE",
        description: "Provides finding any user role",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find own user role",
        code: "FIND_OWN_USER_ROLE",
        description: "Provides finding own user role",
        parentPermissionCode: "FIND_ANY_USER_ROLE"
    },
    {
        name: "Update any user role",
        code: "UPDATE_ANY_USER_ROLE",
        description: "Provides updating any user role",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Update own user role",
        code: "UPDATE_OWN_USER_ROLE",
        description: "Provides updating own user role",
        parentPermissionCode: "UPDATE_ANY_USER_ROLE"
    },
    {
        name: "Delete any user role",
        code: "DELETE_ANY_USER_ROLE",
        description: "Provides deleting any user role",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Delete own user role",
        code: "DELETE_OWN_USER_ROLE",
        description: "Provides deleting own user role",
        parentPermissionCode: "DELETE_ANY_USER_ROLE"
    },
    {
        name: "Create any user verification code",
        code: "CREATE_ANY_USER_VERIFICATION_CODE",
        description: "Provides creation of any user verification code",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Create own user verification code",
        code: "CREATE_OWN_USER_VERIFICATION_CODE",
        description: "Provides creation of own user verification code",
        parentPermissionCode: "CREATE_ANY_USER_VERIFICATION_CODE"
    },
    {
        name: "Find any user verification code",
        code: "FIND_ANY_USER_VERIFICATION_CODE",
        description: "Provides finding any user verification code",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find own user verification code",
        code: "FIND_OWN_USER_VERIFICATION_CODE",
        description: "Provides finding own user verification code",
        parentPermissionCode: "FIND_ANY_USER_VERIFICATION_CODE"
    },
    {
        name: "Update any user verification code",
        code: "UPDATE_ANY_USER_VERIFICATION_CODE",
        description: "Provides updating any user verification code",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Update own user verification code",
        code: "UPDATE_OWN_USER_VERIFICATION_CODE",
        description: "Provides updating own user verification code",
        parentPermissionCode: "UPDATE_ANY_USER_VERIFICATION_CODE"
    },
    {
        name: "Delete any user verification code",
        code: "DELETE_ANY_USER_VERIFICATION_CODE",
        description: "Provides deleting any user verification code",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Delete own user verification code",
        code: "DELETE_OWN_USER_VERIFICATION_CODE",
        description: "Provides deleting own user verification code",
        parentPermissionCode: "DELETE_ANY_USER_VERIFICATION_CODE"
    },
    {
        name: "Create any client",
        code: "CREATE_ANY_CLIENT",
        description: "Provides creation of any client",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find any client",
        code: "FIND_ANY_CLIENT",
        description: "Provides finding any client",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Update any client",
        code: "UPDATE_ANY_CLIENT",
        description: "Provides updating any client",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Delete any client",
        code: "DELETE_ANY_CLIENT",
        description: "Provides deleting any client",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Create any client scope",
        code: "CREATE_ANY_CLIENT_SCOPE",
        description: "Provides creation scope of any client",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find any client scope",
        code: "FIND_ANY_CLIENT_SCOPE",
        description: "Provides finding scope of any client",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Update any client scope",
        code: "UPDATE_ANY_CLIENT_SCOPE",
        description: "Provides updating scope of any client",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Delete any client scope",
        code: "DELETE_ANY_CLIENT_SCOPE",
        description: "Provides deleting scope of any client",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Create any client scope",
        code: "CREATE_ANY_CLIENT_ALLOWED_SCOPE",
        description: "Provides creation scope of any client",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Create own client scope",
        code: "CREATE_OWN_CLIENT_ALLOWED_SCOPE",
        description: "Provides creation scope of own client",
        parentPermissionCode: "CREATE_ANY_CLIENT_ALLOWED_SCOPE"
    },
    {
        name: "Find any client scope",
        code: "FIND_ANY_CLIENT_ALLOWED_SCOPE",
        description: "Provides finding scope of any client",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find own client scope",
        code: "FIND_OWN_CLIENT_ALLOWED_SCOPE",
        description: "Provides finding scope of own client",
        parentPermissionCode: "FIND_ANY_CLIENT_ALLOWED_SCOPE"
    },
    {
        name: "Update any client scope",
        code: "UPDATE_ANY_CLIENT_ALLOWED_SCOPE",
        description: "Provides updating scope of any client",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Update own client scope",
        code: "UPDATE_OWN_CLIENT_ALLOWED_SCOPE",
        description: "Provides updating scope of own client",
        parentPermissionCode: "UPDATE_ANY_CLIENT_ALLOWED_SCOPE"
    },
    {
        name: "Delete any client scope",
        code: "DELETE_ANY_CLIENT_ALLOWED_SCOPE",
        description: "Provides deleting scope of any client",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Delete own client scope",
        code: "DELETE_OWN_CLIENT_ALLOWED_SCOPE",
        description: "Provides deleting scope of own client",
        parentPermissionCode: "DELETE_ANY_CLIENT_ALLOWED_SCOPE"
    },
    {
        name: "Create any permission",
        code: "CREATE_ANY_PERMISSION",
        description: "Provides creation of any permission",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find any permission",
        code: "FIND_ANY_PERMISSION",
        description: "Provides finding of any permission",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Update any permission",
        code: "UPDATE_ANY_PERMISSION",
        description: "Provides updating of any permission",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Delete any permission",
        code: "DELETE_ANY_PERMISSION",
        description: "Provides deleting of any permission",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Create any role",
        code: "CREATE_ANY_ROLE",
        description: "Provides creation of any role",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find any role",
        code: "FIND_ANY_ROLE",
        description: "Provides finding any role",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Update any role",
        code: "UPDATE_ANY_ROLE",
        description: "Provides updating any role",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Delete any role",
        code: "DELETE_ANY_ROLE",
        description: "Provides deleting any role",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Create any role permission",
        code: "CREATE_ANY_ROLE_PERMISSION",
        description: "Provides creation permission for any role",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find any role permission",
        code: "FIND_ANY_ROLE_PERMISSION",
        description: "Provides finding permission for any role",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Update any role permission",
        code: "UPDATE_ANY_ROLE_PERMISSION",
        description: "Provides updating permission for any role",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Delete any role permission",
        code: "DELETE_ANY_ROLE_PERMISSION",
        description: "Provides deleting permission for any role",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Create any scope",
        code: "CREATE_ANY_SCOPE",
        description: "Provides creation of any scope",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find any scope",
        code: "FIND_ANY_SCOPE",
        description: "Provides finding any scope",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Update any scope",
        code: "UPDATE_ANY_SCOPE",
        description: "Provides updating any scope",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Delete any scope",
        code: "DELETE_ANY_SCOPE",
        description: "Provides deleting any scope",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Create any scope permission",
        code: "CREATE_ANY_SCOPE_PERMISSION",
        description: "Provides creation permission of any scope",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Find any scope permission",
        code: "FIND_ANY_SCOPE_PERMISSION",
        description: "Provides finding permission of any scope",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Update any scope permission",
        code: "UPDATE_ANY_SCOPE_PERMISSION",
        description: "Provides updating permission of any scope",
        parentPermissionCode: "FULL_ACCESS"
    },
    {
        name: "Delete any scope permission",
        code: "DELETE_ANY_SCOPE_PERMISSION",
        description: "Provides deleting permission of any scope",
        parentPermissionCode: "FULL_ACCESS"
    }
];

permissions.forEach((permission) => {
    if (permission.parentPermissionCode) {
        prisma.permission.findUnique({
            where: {
                code: permission.parentPermissionCode
            }
        }).then((result) => {
            (permission as any).parentPermissionId = (result as any).id;
            delete (permission as any).parentPermissionCode;
            prisma.permission.create({
                data: permission
            }).then((result) => {
                console.log(result);
            }).catch((error) => {

            }).finally(() => {
                prisma.$disconnect();
            });
        }).catch((error) => {

        }).finally(() => {

        });
    } else {
        prisma.permission.create({
            data: permission
        }).then((result) => {
            console.log(result);
        }).catch((error) => {

        }).finally(() => {
            prisma.$disconnect();
        });
    }
});