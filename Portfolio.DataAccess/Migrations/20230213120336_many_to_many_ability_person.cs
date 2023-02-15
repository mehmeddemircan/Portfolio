using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Portfolio.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class manytomanyabilityperson : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Abilities_People_PersonId",
                table: "Abilities");

            migrationBuilder.DropIndex(
                name: "IX_Abilities_PersonId",
                table: "Abilities");

            migrationBuilder.DropColumn(
                name: "PersonId",
                table: "Abilities");

            migrationBuilder.CreateTable(
                name: "PersonAbilities",
                columns: table => new
                {
                    PersonId = table.Column<int>(type: "integer", nullable: false),
                    AbilityId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonAbilities", x => new { x.PersonId, x.AbilityId });
                    table.ForeignKey(
                        name: "FK_PersonAbilities_Abilities_AbilityId",
                        column: x => x.AbilityId,
                        principalTable: "Abilities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PersonAbilities_People_PersonId",
                        column: x => x.PersonId,
                        principalTable: "People",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PersonAbilities_AbilityId",
                table: "PersonAbilities",
                column: "AbilityId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PersonAbilities");

            migrationBuilder.AddColumn<int>(
                name: "PersonId",
                table: "Abilities",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Abilities_PersonId",
                table: "Abilities",
                column: "PersonId");

            migrationBuilder.AddForeignKey(
                name: "FK_Abilities_People_PersonId",
                table: "Abilities",
                column: "PersonId",
                principalTable: "People",
                principalColumn: "Id");
        }
    }
}
