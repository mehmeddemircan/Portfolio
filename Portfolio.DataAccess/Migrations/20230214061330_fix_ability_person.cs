using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Portfolio.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class fixabilityperson : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Percentage",
                table: "Abilities");

            migrationBuilder.AddColumn<int>(
                name: "Percentage",
                table: "PersonAbilities",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Percentage",
                table: "PersonAbilities");

            migrationBuilder.AddColumn<int>(
                name: "Percentage",
                table: "Abilities",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
